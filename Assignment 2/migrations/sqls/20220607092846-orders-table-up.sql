CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(50),
    user_id BIGINT REFERENCES users(id)
);