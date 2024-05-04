drop database if exists tgdd;

create database tgdd;

use tgdd;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    image_url TEXT,
    init_price VARCHAR(50),
    price VARCHAR(50),
    discount VARCHAR(50),
    installment VARCHAR(50),
    memory VARCHAR(50),
    policy VARCHAR(100),
    rating_star INT,
    rating_total INT,
    display VARCHAR(50),
    resolution VARCHAR(50)
);