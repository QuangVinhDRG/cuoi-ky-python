from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS
from mysql.connector import Error
import os

app = Flask(__name__)
CORS(app)

# Environment variables for database credentials
DB_HOST = os.environ.get('DB_HOST', 'mysql')
DB_USER = os.environ.get('DB_USER', 'root')
DB_PASSWORD = os.environ.get('DB_PASSWORD', '1234')
DB_DATABASE = os.environ.get('DB_DATABASE', 'tgdd')

def safe_int(value):
    try:
        return int(value)
    except ValueError:
        return 0

# Kết nối đến cơ sở dữ liệu MySQL
def connect_db():
    try:
        conn = mysql.connector.connect(
            host=DB_HOST,
            user=DB_USER,   
            password=DB_PASSWORD,
            database=DB_DATABASE
        )
        return conn
    except Error as e:
        print(f"Error: {e}")


@app.route('/database-api', methods=['GET'])
def get_products():
    try:
        conn = connect_db()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM products")
        products = cursor.fetchall()
        return jsonify({'products': products}), 200
    except Error as e:
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

# API to insert a new product
@app.route('/database-api', methods=['POST'])
def add_product():
    data = request.get_json()
    required_fields = ['name', 'image_url', 'init_price', 'price', 'discount', 'installment',
                       'memory', 'policy', 'rating_star', 'rating_total', 'display', 'resolution']
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing data for one or more fields'}), 400

    try:
        conn = connect_db()
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO products 
            (name, image_url, init_price, price, discount, installment, memory, policy, 
            rating_star, rating_total, display, resolution) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """, 
            (data['name'], data['image_url'], data['init_price'], data['price'], data['discount'],
             data['installment'], data['memory'], data['policy'], safe_int(data['rating_star']), 
             safe_int(data['rating_total']), data['display'], data['resolution']))
        conn.commit()
        return jsonify({'message': 'Product added successfully'}), 201
    except Error as e:
        conn.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        cursor.close()
        conn.close()

@app.route('/database-api/search', methods=['GET'])
def search_product():
    product_name = request.args.get('name', default="", type=str)
    if product_name == "":
        return jsonify({'error': 'Product name is required'}), 400
    
    try:
        conn = connect_db()
        if conn is None:
            raise Error("Failed to connect to the database")
        cursor = conn.cursor(dictionary=True)
        query = "SELECT * FROM products WHERE name LIKE %s"
        cursor.execute(query, ('%' + product_name + '%',))
        products = cursor.fetchall()
        return jsonify({'products': products}), 200
    except Error as e:
        return jsonify({'error': str(e)}), 500
    finally:
        if conn is not None:
            cursor.close()
            conn.close()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    app.run(debug=True, host='0.0.0.0', port=port)