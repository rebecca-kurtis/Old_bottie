-- DROP and CREATE products TABLE
DROP TABLE IF EXISTS products CASCADE;

CREATE TABLE products (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL,
latin_name VARCHAR(255),
price_in_cents INT NOT NULL,
modified_date TIMESTAMP,
inventory INT NOT NULL,
image_url VARCHAR(255) NOT NULL,
CONSTRAINT fk_recipient FOREIGN KEY(id) REFERENCES recipients(id)
);