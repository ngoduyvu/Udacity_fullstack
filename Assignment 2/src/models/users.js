"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
class UserStore {
    // List Users
    async index() {
        try {
            const sql = 'SELECT * FROM users';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Cannot get users. Error: ${err}`);
        }
    }
    // Create an User
    async create(user) {
        try {
            const sql = 'INSERT INTO users (id, username, password) VALUES($1, $2, $3) RETURNING *';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [user.id, user.username, user.password]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not create user ${user.username}. Error: ${err}`);
        }
    }
    // Show an User
    async show(id) {
        try {
            const sql = 'SELECT * FROM users WHERE id = ($1)';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not get the user ${id}. Error: ${err}`);
        }
    }
    // Delete an User
    async delete(id) {
        try {
            const sql = 'DELETE FROM users WHERE id = ($1)';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not delete the user ${err}`);
        }
    }
    // Authentication
    async authenticate(username, password) {
        try {
            const sql = 'SELECT password FROM users WHERE username=($1)';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [username]);
            conn.release();
            if (result.rows.length) {
                const user = result.rows[0];
                const password_checker = bcrypt_1.default.compareSync(password + BCRYPT_PASSWORD, user.password);
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
            throw new Error(`Could not Authenticate user ${username}. Error: ${err}`);
        }
    }
}
exports.UserStore = UserStore;
