"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
class OrderStore {
    // List Orders
    async index() {
        if (database_1.default) {
            try {
                const sql = 'SELECT * FROM orders';
                const conn = await database_1.default.connect();
                const result = await conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (err) {
                throw new Error(`Could not get orders. Error: ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
    // Create an Order
    async create(order) {
        if (database_1.default) {
            try {
                const sql = 'INSERT INTO orders (id, quantity, status, user_id) VALUES($1, $2, $3, $4) RETURNING *';
                const conn = await database_1.default.connect();
                const result = await conn.query(sql, [order.id, order.quantity, order.status, order.user_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not create order. Error: ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
    // Show an Order
    async show(order_id) {
        if (database_1.default) {
            try {
                const sql = 'SELECT * FROM orders WHERE user_id=($1)';
                const conn = await database_1.default.connect();
                const result = await conn.query(sql, [order_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not get the order ${order_id}. Error: ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
    // Delete an Order
    async delete(order_id) {
        if (database_1.default) {
            try {
                const sql = 'DELETE FROM orders WHERE user_id=($1)';
                const conn = await database_1.default.connect();
                const result = await conn.query(sql, [order_id]);
                conn.release();
                return result.rows[0];
            }
            catch (err) {
                throw new Error(`Could not delete order ${order_id}. Error: ${err}.`);
            }
        }
        else {
            throw new Error(`Cannot connect to the Database.`);
        }
    }
}
exports.OrderStore = OrderStore;
