import client from "../database";
import dotenve from "dotenv";
import bcrypt from  "bcrypt";

const {BCRYPT_PASSWORD, SALT_ROUNDS} = process.env;

export type User = {
    id: number | string;
    username: string;
    password: string;
}

export class UserStore {
    async index(): Promise<User[]> {
        try {
            const sql = 'SELECT * FROM users';
            const conn = await client.connect();
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Cannot get users. Error: ${err}`); 
        }
    }

    async create(user: User): Promise<User> {
        try {
            const sql = 'INSERT INTO users (id, username, password) VALUES($1, $2, $3) RETURNING *';
            const conn = await client.connect();
            const result = await conn.query(sql, [user.id, user.username, user.password]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not create user ${user.username}. Error: ${err}`);
        }
    }

    async show(id: string | number): Promise<User> {
        try {
            const sql = 'SELECT * FROM users WHERE id = ($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not get the user ${id}. Error: ${err}`);
        }
    }

    async delete(id: string | number): Promise<User> {
        try {
            const sql = 'DELETE FROM users WHERE id = ($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not delete the user ${err}`);
        }
    }

    async authenticate(username: string, password: string): Promise<User | null> {
        try {
            const sql = 'SELECT password FROM users WHERE username=($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [username]);
            conn.release();

            if (result.rows.length) {
                const user = result.rows[0];
                const password_checker = bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password);
                if (password_checker) {
                    console.log('Successfully Verify.');
                    return user;
                } else {
                    console.log('Fail to Verify.');
                    return null;
                }
            }
            return null;
        } catch(err) {
            throw new Error(`Could not Authenticate user ${username}. Error: ${err}`);
        }
    }
}