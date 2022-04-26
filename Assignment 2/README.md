# Storefront Backend Project


# SQL Command on the new database
`CREATE USER full_stack_user WITH PASSWORD 'password123';`  <br/>
`CREATE DATABASE storefront;`  <br/>
`CREATE DATABASE storefront_test;`  <br/>
`GRANT ALL PRIVILEGES ON DATABASE storefront TO full_stack_user;`  <br/>
`GRANT ALL PRIVILEGES ON DATABASE storefront_test TO full_stack_user;`  <br/>

# Run Migration on database
Navigate to the Assingmnet 2 directory and run  <br/>
`db-migrate up`
## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies
Your application must make use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps to Completion

### 1. Plan to Meet Requirements

In this repo there is a `REQUIREMENTS.md` document which outlines what this API needs to supply for the frontend, as well as the agreed upon data shapes to be passed between front and backend. This is much like a document you might come across in real life when building or extending an API. 

Your first task is to read the requirements and update the document with the following:
- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    
**Example**: A SHOW route: 'blogs/:id' [GET] 

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
**Example**: You can format this however you like but these types of information should be provided
Table: Books (id:varchar, title:varchar, author:varchar, published_year:varchar, publisher_id:string[foreign key to publishers table], pages:number)

**NOTE** It is important to remember that there might not be a one to one ratio between data shapes and database tables. Data shapes only outline the structure of objects being passed between frontend and API, the database may need multiple tables to store a single shape. 

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission.

# Helpful command list
## Node Command:
Check your version: $ node -v  <br/>
To run index.js use: $ node src/index.js   ||  $node src/.  <br/>
Start a project: npm init  || npm init -y  <br/>
Install Express: npm install express  <br/>
Install Typescript: npm install typescript --save-dev  <br/>
Install Support packages: npm install ts-node tsc-watch --save-dev  <br/>
Run Typescript compline: npx tsc  <br/>
Install PostgresSQL: npm install pg  <br/>
Install yarn: npm install --global yarn  <br/>

Install Jasmine: npm install -g  jasmine  <br/>
Add Jasmine and add Typescript types: yarn add jasmine @types/jasmine  <br/>
Run Jasmine initialization: jasmine init  <br/>

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