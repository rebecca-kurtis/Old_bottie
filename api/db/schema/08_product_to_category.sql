-- DROP and CREATE product to category TABLE
DROP TABLE IF EXISTS product_to_category CASCADE;

CREATE TABLE product_to_category (
id SERIAL PRIMARY KEY NOT NULL,
CONSTRAINT fk_category FOREIGN KEY(id) REFERENCES categories(id),
CONSTRAINT fk_product FOREIGN KEY(id) REFERENCES products(id)
);