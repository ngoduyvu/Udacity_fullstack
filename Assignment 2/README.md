# Storefront Backend Project

# Setting Up
## Required Library for the project
The application uses of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing


## Environment Set-Up
This is the following environment variable in .env file
```
PORT=3001
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=storefront
POSTGRES_DB_TEST=test
POSTGRES_USER=full_stack_user
POSTGRES_PASSWORD=password123
BCRYPT_PASSWORD=fullstack123
SALT_ROUNDS=10
TOKEN_SECRET=thisissecret
#ENV=dev
ENV=test
POSTGRES_TEST_DB=test
```
## SQL Command to create on Postgres Server
`CREATE USER full_stack_user WITH PASSWORD 'password123';`  <br/>
`CREATE DATABASE storefront;`  <br/>
`CREATE DATABASE storefront_test;`  <br/>
`GRANT ALL PRIVILEGES ON DATABASE storefront TO full_stack_user;`  <br/>
`GRANT ALL PRIVILEGES ON DATABASE storefront_test TO full_stack_user;`  <br/>

## Run Migration on database
Navigate to the Assingmnet 2 directory and run  <br/>
`db-migrate up`


# Helpful command list
## Node Command:
Check your version: `node -v`  <br/>
To run index.js use: `node src/index.js`   ||  `node src/.`  <br/>
Start a project: `npm init`  || `npm init -y`  <br/>
Install Express: `npm install express`  <br/>
Install Typescript: `npm install typescript --save-dev`  <br/>
Install Support packages: `npm install ts-node tsc-watch --save-dev`  <br/>
Run Typescript compline: `npx tsc`  <br/>
Install PostgresSQL: `npm install pg`  <br/>
Install yarn: `npm install --global yarn`  <br/>

Install Jasmine: `npm install -g  jasmine`  <br/>
Add Jasmine and add Typescript types: `yarn add jasmine @types/jasmine`  <br/>
Run Jasmine initialization: `jasmine init`  <br/>

## Postgres SQL Command:
Switch to the postgres user: `su postgres`  <br/>
Start postgres: `psql postgres`  <br/>
Exit postgres: Ctrl+D  <br/>
Connect to a database: `\c <database_name>`  <br/>
Create a new database: `create database <database_name>`  <br/>
Get out of psql: `\q`  <br/>
List Role: `\du` <br/>
List Database: `\l`  <br/>
List Relations within a database: `\d`  <br/>
List All tables: `\dt`  <br/>
List All Roles: `\du`  <br/>

## Docker Command
List all of the image: `docker ps`  <br/>
Create Docker Image for postgres: `docker run -d -p 5432:5432 --name "container name" -e POSTGRES_PASSWORD="your password" postgres`  <br/>
Start Container: `docker container start "container name"`  <br/>
Connect to container: `docker exec -it "container name" bash`  <br/>
Stop container: `docker stop container-name`  <br/>
Remove container: `docker rm container-name`  <br/>
Remove unused data: `docker system prune`  <br/>

List all of container that are run: `docker container ls`  <br/>
List all of container even without running: `docker container ls -a`  <br/>

Run Docker Compose file: `docker-compose up`  <br/>