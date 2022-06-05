# Storefront Backend Project
## Scripts
**Install all requirements** <br/>
- `npm i` <br/>

**Unit Tests** <br/>
- `npm run test` <br/>

**Run Build** <br/>
- `npm run build` <br/>

**Check Style by Prettier** <br/>
- `npm run prettier` <br/>

**Check code by Linter** <br/>
- `npm run lint` <br/>


## Setting Up
### Required Library for the project
The application uses of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

Run `npm i` to install all of the required modules <br/>
### 1. Create .env file for environment variables
This is the following environment variable in .env file which is used for docker container
```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB_DEV=storefront_dev
POSTGRES_TEST_DB=storefront_test
POSTGRES_USER=full_stack_user
POSTGRES_PASSWORD=password123
POSTGRES_PORT=5432
BCRYPT_PASSWORD=fullstack123
SALT_ROUNDS=10
TOKEN_SECRET=thisissecret
#ENV=dev
ENV=test
```

### 2. Setup Docker Container
In the directory, there is a docker-compose file, users can run <br/>
Check docker-compose parameter: `docker-compose config`
Spin up the container: `docker-compose up`
Stop the container: `docker-compose down`

After Start the container, user can run `docker ps` to see the container name <br/>
To interacte with the container run `docker exec -it <container name> bash` <br/>
Login to postgres by `psql -U postgres` with postgres is username from .env file <br/>

#### SQL Command to create on Postgres Server
Run following SQL queries to setup datasets in the container <br/>
```
CREATE USER full_stack_user WITH PASSWORD 'password123';
CREATE DATABASE storefront;
CREATE DATABASE storefront_test;
GRANT ALL PRIVILEGES ON DATABASE storefront TO full_stack_user;
GRANT ALL PRIVILEGES ON DATABASE storefront_test TO full_stack_user;
```
## Run Migration on database
Navigate to the Assingmnet 2 directory and run  <br/>
Create 
Run Migrate tables: `npm run migrate-up`
Reset database by dropping tables: `npm run migrate-down` <br/>
