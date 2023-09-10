-- --TO CREATE DATABASE
CREATE DATABASE inventory_management;

-- --TO SELECT A DESIRED DATABASE FOR USE
USE inventory_management;

-- --TO CREATE ENTITIES(TABLES) FOR THE DATABASE
CREATE TABLE customers (
customers_id BIGINT,
email VARCHAR(20),
username VARCHAR(20),
first_name VARCHAR(20),
last_name VARCHAR(20),
phone_number BIGINT,
address VARCHAR(100),
gender ENUM("male", "female"),
PRIMARY KEY (user_id)
);


CREATE TABLE admins (
admin_id BIGINT,
email VARCHAR(20),
username VARCHAR(20),
first_name VARCHAR(20),
last_name VARCHAR(20),
phone_number BIGINT,
address VARCHAR(100),
gender ENUM("male", "female"),
PRIMARY KEY (user_id)
);

CREATE TABLE categories (
category_id BIGINT,
name VARCHAR(20),
desc VARCHAR(255),
PRIMARY KEY (category_id)
);

CREATE TABLE products (
id BIGINT,
name VARCHAR(20),
price VARCHAR(8),
size ENUM("small", "medium", "large"),
category VARCHAR(20),
desc VARCHAR(500),
category_id BIGINT,
PRIMARY KEY (id),
FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- -- TO INSERT RECORDS INTO THE ENTITIES(TABLES)
 INSERT INTO customers VALUES 
 ("1", "sulaimon123", "ras24", "maito4me@gmail.com", "08181699389", 
 "66, adeniji street, Alakuko, Lagos, Nigeria", "male"),

 ("2", "stephen88", "osun67", "loree@gmail.com", "0906543211386", 
 "100, ademola street, Alakuko, Lagos, Lagos, Nigeria", "male"),

 
 INSERT INTO admin VALUES 
 ("1", "Segun", "Tolani", 3),

 ("2", "Lawal", "Kehinde", 4);


 INSERT INTO categories VALUES
 (1, "footWares", "These contain every kind of foot wares"),

 (2, "drinks", "These contain every kind of soft drinks");
 
INSERT INTO products VALUES 
("1", "Shoe", "N10000", 1, 42, "black", "A black leather material shoe with a lace", 2, 1),

("2", "soap", "N500", 3, null, "white", "A white soap with smooth texture", 2, 2);


-- --TO GET RECORDS FROM ENTITIES(TABLES)
SELECT * FROM customers;

SELECT * FROM admin;

SELECT * FROM products;


-- --TO UPDATE RECORDS IN ENTITIES(TABLES)
UPDATE products 
SET unit_price = "N9000"
WHERE productID = 1;

UPDATE customers 
SET lastName = "Rasheed"
WHERE customerID = 1;


-- --TO DELETE RECORDS FROM ENTITIES(TABLES)
DELETE FROM products WHERE productID = 2;

DELETE FROM orders WHERE orderID = 2;