-- IF NOT EXISTS (users)
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     firstName VARCHAR(150),
--     lastName VARCHAR(150),
--     password VARCHAR(255)
-- );

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(150),
    lastName VARCHAR(150),
    password VARCHAR(255)
);