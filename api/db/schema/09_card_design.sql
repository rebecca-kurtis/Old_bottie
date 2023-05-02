-- DROP and CREATE product to card_design TABLE
DROP TABLE IF EXISTS card_design CASCADE;

CREATE TABLE card_design (
id SERIAL PRIMARY KEY NOT NULL,
CONSTRAINT fk_product FOREIGN KEY(id) REFERENCES products(id),
image_url VARCHAR(255),
message TEXT
);