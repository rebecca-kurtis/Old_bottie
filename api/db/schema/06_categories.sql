-- DROP and CREATE categories TABLE
DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
category_id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(255) NOT NULL
);