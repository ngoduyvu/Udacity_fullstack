"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStore = void 0;
const database_1 = __importDefault(require("../database"));
class ProductStore {
    // List Products
    async index() {
        try {
            const sql = 'SELECT * FROM products';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        }
        catch (err) {
            throw new Error(`Could not get products. Error: ${err}`);
        }
    }
    // Show an Product
    async show(id) {
        try {
            const sql = 'SELECT * FROM products WHERE id = ($1)';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not get the product ${id}. Error: ${err}`);
        }
    }
    // Create an Product
    async create(product) {
        try {
            const sql = 'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [product.name, product.price, product.category]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not create the user ${product.name}. Error: ${err}`);
        }
    }
    // Delete an Product
    async delete(id) {
        try {
            const sql = 'DELETE FROM products WHERE id = ($1)';
            const conn = await database_1.default.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Could not delete the product ${id}. Error: ${err}`);
        }
    }
}
exports.ProductStore = ProductStore;
