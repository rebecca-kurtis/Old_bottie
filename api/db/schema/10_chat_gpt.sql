-- DROP and CREATE product to chat GPT TABLE
DROP TABLE IF EXISTS chat_gpt CASCADE;

CREATE TABLE chat_gpt (
id SERIAL PRIMARY KEY NOT NULL,
CONSTRAINT fk_card_design FOREIGN KEY(id) REFERENCES card_design(id),
Occasion VARCHAR(255),
modified_date TIMESTAMP,
mood VARCHAR(255),
final_prompt TEXT,
prose_style VARCHAR(255),
style VARCHAR(255),
word_length INT
);