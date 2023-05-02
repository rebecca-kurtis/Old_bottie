-- DROP and CREATE orders TABLE
DROP TABLE IF EXISTS cart_items CASCADE;

CREATE TABLE cart_items (
id SERIAL PRIMARY KEY NOT NULL,
CONSTRAINT fk_cart FOREIGN KEY(id) REFERENCES carts(id),
CONSTRAINT fk_product FOREIGN KEY(id) REFERENCES products(id),
quantity INT
);