import { Client } from "pg";
import client from "../database";

export type Order= {
    id: number | string;
    quantity: number;
    status: string;
    user_id: number;
}

export class OrderStore {
    // List Orders
    async index(): Promise<Order[]> {
        if (client) {
            try {
                const sql = 'SELECT * FROM orders';
                const conn = await client.connect();

                const result = await conn.query(sql);

                conn.release();
                return result.rows;
            } catch (err) {
                throw new Error (`Could not get orders. Error: ${err}.`);
            }
        } else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }

    // Create an Order
    async create(order: Order): Promise<Order[]> {
        if (client) {
            try {
                const sql = 'INSERT INTO orders (id, quantity, status, user_id) VALUES($1, $2, $3, $4) RETURNING *';
                const conn = await client.connect();
                const result = await conn.query(sql, [order.id, order.quantity, order.status, order.user_id]);
                conn.release();
                return result.rows[0];
            } catch (err) {
                throw new Error(`Could not create order. Error: ${err}.`);
            }
        } else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }

    // Show an Order
    async show(order_id: string | number): Promise<Order[]> {
        if (client) {
            try {
                const sql = 'SELECT * FROM orders WHERE user_id=($1)';
                const conn = await client.connect();
                const result = await conn.query(sql, [order_id]);
                conn.release();
                return result.rows[0];
            } catch(err) {
                throw new Error(`Could not get the order ${order_id}. Error: ${err}.`);
            }
        } else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }

    // Delete an Order
    async delete(order_id: string | number): Promise<Order[]> {
        if (client) {
            try {
                const sql = 'DELETE FROM orders WHERE user_id=($1)';
                const conn = await client.connect();
                const result = await conn.query(sql, [order_id]);
                conn.release();
                return result.rows[0];
            } catch(err) {
                throw new Error(`Could not delete order ${order_id}. Error: ${err}.`);
            }
        } else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
}