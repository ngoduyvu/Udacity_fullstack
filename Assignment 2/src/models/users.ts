import client from '../database';
import dotenve from 'dotenv';
import bcrypt from 'bcrypt';

const saltRounds = process.env.SALT_ROUNDS;
const pepper = process.env.BCRYPT_PASSWORD;

export type User = {
  id?: number | string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
};

export class UserStore {
  // List Users
  async index(): Promise<User[]> {
    if (client) {
      try {
        const sql = 'SELECT * FROM users';
        const conn = await client.connect();
        const result = await conn.query(sql);
        conn.release();
        return result.rows;
      } catch (err) {
        throw new Error(`Cannot get users. Error: ${err}.`);
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }

  // Create an User
  async create(user: User): Promise<User> {
    if (client) {
      try {
        const sql =
          'INSERT INTO users (username, firstName, lastName, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const conn = await client.connect();

        const hash = bcrypt.hashSync(
          user.password + pepper,
          parseInt(saltRounds as string)
        );
        const result = await conn.query(sql, [
          user.username,
          user.firstName,
          user.lastName,
          hash
        ]);
        conn.release();
        return result.rows[0];
      } catch (err) {
        throw new Error(
          `Could not create user ${user.username}. Error: ${err}.`
        );
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }

  // Show an User
  async show(username: string): Promise<User> {
    if (client) {
      try {
        const sql = 'SELECT * FROM users WHERE username = ($1)';
        const conn = await client.connect();
        const result = await conn.query(sql, [username]);
        conn.release();
        return result.rows[0];
      } catch (err) {
        throw new Error(`Could not get the user ${username}. Error: ${err}.`);
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }

  // Delete an User by ID
  async delete(id: string | number): Promise<User> {
    if (client) {
      try {
        const sql = 'DELETE FROM users WHERE username = ($1)';
        const conn = await client.connect();
        const result = await conn.query(sql, [id]);
        conn.release();
        return result.rows[0];
      } catch (err) {
        throw new Error(`Could not delete the user ${err}.`);
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }

  // Authentication
  async authenticate(username: string, password: string): Promise<User | null> {
    if (client) {
      try {
        const sql = 'SELECT password FROM users WHERE username=($1)';
        const conn = await client.connect();
        const result = await conn.query(sql, [username]);
        conn.release();

        if (result.rows.length) {
          const user = result.rows[0];
          const password_checker = bcrypt.compareSync(
            password + pepper,
            user.password
          );
          if (password_checker) {
            console.log('Successfully Verify.');
            return user;
          } else {
            console.log('Fail to Verify.');
            return null;
          }
        }
        return null;
      } catch (err) {
        throw new Error(
          `Could not Authenticate user ${username}. Error: ${err}.`
        );
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }
}
