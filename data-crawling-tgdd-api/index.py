from flask import Flask, jsonify
import requests
from bs4 import BeautifulSoup
import os

app = Flask(__name__)

@app.route('/data-crawling-tgdd', methods=['GET'])
def scrape():
    url = 'https://www.thegioididong.com/dtdd'
    headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0'}
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raises HTTPError for bad responses
    except requests.RequestException as e:
        return jsonify({'error': 'Error fetching data: {}'.format(e)}), 500

    soup = BeautifulSoup(response.text, 'html.parser')
    products = soup.find_all('li', attrs={'class': 'item ajaxed __cate_42'})
    results = []
    
    for product in products:
        product_data = extract_product_data(product)
        results.append(product_data)
        send_to_database(product_data)
    
    return jsonify(results)

def extract_product_data(product):
    name = product.find('h3').text.strip()
    price = product.find('strong', attrs={'class': 'price'}).text.strip()
    image = extract_image_url(product)
    installment = product.find('span', attrs={'class': 'lb-tragop'})
    installment = installment.text.strip() if installment else 'NONE'
    rating_star = len(product.find_all('i', attrs={'class': 'icon-star'}))
    rating_total = extract_text_or_none(product.find('p', attrs={'class': 'item-rating-total'}))
    policy = extract_policy(product.find('p', attrs={'class': 'result-label'}))
    display, resolution = extract_display_and_resolution(product)
    memory = extract_text_or_none(product.find('li', class_='merge__item item act'))
    init_price = extract_text_or_none(product.find('p', class_='price-old black'), default=price)
    discount = extract_text_or_none(product.find('span', class_='percent'))

    return {
        'name': name,
        'price': price,
        'installment': installment,
        'image_url': image,
        'rating_star': rating_star,
        'rating_total': rating_total,
        'policy': policy,
        'display': display,
        'resolution': resolution,
        'memory': memory,
        'init_price': init_price,
        'discount': discount
    }

def extract_policy(element, default='NONE') :
    span_tag = element.find('span')
    return span_tag.text.strip() if span_tag else default

def extract_image_url(product):
    image = product.find('img', attrs={'class': 'thumb'})
    return image.get('src') or image.get('data-src')

def extract_text_or_none(element, default='NONE'):
    return element.text.strip() if element else default

def extract_display_and_resolution(product):
    div_tag = product.find('div', class_='item-compare gray-bg')
    if div_tag:
        span_tags = div_tag.find_all('span')
        return span_tags[0].text.strip(), span_tags[1].text.strip()
    return 'NONE', 'NONE'

def send_to_database(product_data):
    try:
        requests.post('http://crud-api:3000/database-api', json=product_data)
    except requests.RequestException as e:
        print(f"Error sending data to database: {e}")

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
