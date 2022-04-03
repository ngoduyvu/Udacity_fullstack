import { Client } from "pg";
import client from "../database";

export type Order= {
    id: number | string;
    quantity: number;
    status: string;
    user_id: number;
}

export class OrderStore {
    async index(): Promise<Order[]> {
        try {
            const sql = 'SELECT * FROM orders';
            const conn = await client.connect();

            const result = await conn.query(sql);

            conn.release();
            return result.rows;
        } catch (err) {
            throw new Error (`Could not get orders. Error: ${err}`);
        }
    }

    // Create Order
    async create(order: Order): Promise<Order[]> {
        try {
            const sql = 'INSERT INTO orders (id, quantity, status, user_id) VALUES($1, $2, $3, $4) RETURNING *';
            const conn = await client.connect();
            const result = await conn.query(sql, [order.id, order.quantity, order.status, order.user_id]);
            conn.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not create order. Error: ${err}`);
        }
    }

    // Show Order
    async show(id: string | number): Promise<Order[]> {
        try {
            const sql = 'SELECT * FROM orders WHERE id=($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not get the order ${id}. Error: ${err}`);
        }
    }

    // Delete Order
    async delete(id: string | number): Promise<Order[]> {
        try {
            const sql = 'DELETE FROM orders WHERE id=($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not delete order ${id}. Error: ${err}`);
        }
    }
}