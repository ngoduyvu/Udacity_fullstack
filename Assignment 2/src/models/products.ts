import client from "../database";

export type Product = {
    id: number | string;
    name: string;
    price: number;
    category: string;
}

export class ProductStore {
    async index(): Promise<Product[]> {
        try {
           const sql = 'SELECT * FROM products';
           const conn = await client.connect();
           const result = await conn.query(sql);
           conn.release();
           return result.rows;
        } catch(err) {
            throw new Error(`Could not get products. Error: ${err}`);
        }
    }

    async show(id: string | number): Promise<Product> {
        try {
            const sql = 'SELECT * FROM products WHERE id = ($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not get the product ${id}. Error: ${err}`);
        }
    }

    async create(product: Product): Promise<Product> {
        try {
            const sql = 'INSERT INTO products (id, name, price, category) VALUES ($1, $2, $3, $4) RETURNING *';
            const conn = await client.connect();
            const result = await conn.query(sql, [product.id, product.name, product.price, product.category]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not create the user ${product.name}. Error: ${err}`);
        }
    }

    async delete(id: string | number): Promise<Product> {
        try {
            const sql = 'DELETE FROM products WHERE id = ($1)';
            const conn = await client.connect();
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch(err) {
            throw new Error(`Could not delete the product ${id}. Error: ${err}`);
        }
    }
}