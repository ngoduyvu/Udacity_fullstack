# Udacity fullstack
Udacity Assignments

## Command to install 
Install Typescript
npm i typescript --save-dev
npm init -y

Add typescript, ts-node and @types/node definitions to dev dependencies
npm i --save-dev typescript 
npm i --save-dev ts-node 
npm i --save-dev @types/node

**Jasmine** <p>
Install Jasmine: npm i jasmine <br>
Add a reporter for outputting Jasmine results to the terminal: npm i jasmine-spec-reporter <br>
Add type definitions for Jasmine with: npm i --save-dev @types/jasmine <br>

**Express** <p>
Install express: npm i express <br>
npm i --save-dev @types/express <br>

**Nodemon** <p>
Install nodemon: npm i --save-dev nodemon

**Db-migrate** <p>
Install db-migrate: npm install -g db-migrate
yarn add db-migrate db-migrate-pg

**Jsonwebtoken** <p>
Install jsonwebtoken: yarn add jsonwebtoken <br>
Install jsonwebtoken type definition: npm i --save-dev @types/jsonwebtoken <br>

**Bcrypt** <p>
Install bcrypt: yarn add bcrypt <br>
Install bcrypt type definition: npm i --save-dev @types/bcrypt <br>

**Dotenv** <p>
Install dotenv: npm i dotenv


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

Installl db-migrate `npm install -g db-migrate`
Install package to the project `yarn add db-migrate db-migrate-pg`
Create Migration `db-migrate create mythical-worlds-table --sql-file`
Bring migration up `db-migrate up`
Bring migration down `db-migrate down`

## Postgres SQL Command:
Switch to the postgres user: `su username` (the username and password are defined in .env file) <br/>
Start postgres: `psql postgres`  <br/>
Exit postgres: Ctrl+D  <br/>
Connect to a database: `\c <database_name>`  <br/>
Create a new database: `create database <database_name>`  <br/>
Get out of psql: `\q`  <br/>
List All Roles: `\du`  <br/>
List Database: `\l`  <br/>
List Relations within a database: `\d`  <br/>
List All tables: `\dt`  <br/>

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

Run Docker Compose file: `docker-compose up -d`  <br/>
Check if configure of Compose file: `docker-compose config`  <br/>
Login to the database using username and database name from .env file `psql --host="hostname in .env" --username="username in .env" --dbname="dbname in .env"` <br/>
Login to the database as username from .env file: `psql -U "username in .env"`  <br/>


# Angular

Install Angular CLI globally: `npm install -g @angular/cli` <br/>
Check Angular version: `ng --version` <br/>
Create a new Anglular Project:  `ng new <project-name>` <br/>
Build and serve new project:  `ng serve --port <port-number>` <br/>
Generate a file based on a certain schematic: `ng generate <schematic> <name>` <br/>
Generate a module: `ng generate module <module-name>` <br/>
Generate a component: `ng generate component <name>` <br/>
Generate a service: `ng generate service <name>` <br/>
Adding a npm package: `ng add <npm package>` <br/>
