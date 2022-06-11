"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;
class UserStore {
    // List Users
    async index() {
        if (database_1.default) {
            try {
                const sql = 'SELECT * FROM users';
                const conn = await database_1.default.connect();
                const result = await conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Cannot get users. Error: ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
    // Create an User
    async create(user) {
        if (database_1.default) {
            try {
                const sql = 'INSERT INTO users (username, firstName, lastName, password) VALUES ($1, $2, $3, $4) RETURNING *';
                const conn = await database_1.default.connect();
                const hash = bcrypt_1.default.hashSync(user.password + pepper, parseInt(saltRounds));
                const result = await conn.query(sql, [
                    user.username,
                    user.firstName,
                    user.lastName,
                    hash
                ]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not create user ${user.username}. Error: ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
    // Show an User
    async show(username) {
        if (database_1.default) {
            try {
                const sql = 'SELECT * FROM users WHERE username = ($1)';
                const conn = await database_1.default.connect();
                const result = await conn.query(sql, [username]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not get the user ${username}. Error: ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
    // Delete an User by ID
    async delete(id) {
        if (database_1.default) {
            try {
                const sql = 'DELETE FROM users WHERE username = ($1)';
                const conn = await database_1.default.connect();
                const result = await conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not delete the user ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
    // Authentication
    async authenticate(username, password) {
        if (database_1.default) {
            try {
                const sql = 'SELECT password FROM users WHERE username=($1)';
                const conn = await database_1.default.connect();
                const result = await conn.query(sql, [username]);
                conn.release();
                if (result.rows.length) {
                    const user = result.rows[0];
                    const password_checker = bcrypt_1.default.compareSync(password + pepper, user.password);
                    if (password_checker) {
                        console.log('Successfully Verify.');
                        return user;
                    }
                    else {
                        console.log('Fail to Verify.');
                        return null;
                    }
                }
                return null;
            }
            catch (err) {
                throw new Error(`Could not Authenticate user ${username}. Error: ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
}
exports.UserStore = UserStore;
