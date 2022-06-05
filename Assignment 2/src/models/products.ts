import client from '../database';

export type Product = {
  id?: number | string;
  name: string;
  price: number;
  category: string;
};

export class ProductStore {
  // List Products
  async index(): Promise<Product[]> {
    if (client) {
      try {
        const sql = 'SELECT * FROM products';
        const conn = await client.connect();
        const result = await conn.query(sql);
        conn.release();
        return result.rows;
      } catch (err) {
        throw new Error(`Could not get products. Error: ${err}.`);
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }

  // Show an Product
  async show(id: string | number): Promise<Product> {
    if (client) {
      try {
        const sql = 'SELECT * FROM products WHERE id = ($1)';
        const conn = await client.connect();
        const result = await conn.query(sql, [id]);
        conn.release();
        return result.rows[0];
      } catch (err) {
        throw new Error(`Could not get the product ${id}. Error: ${err}`);
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }

  // Create an Product
  async create(product: Product): Promise<Product> {
    if (client) {
      try {
        const sql =
          'INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *';
        const conn = await client.connect();
        const result = await conn.query(sql, [
          product.name,
          product.price,
          product.category
        ]);
        conn.release();
        return result.rows[0];
      } catch (err) {
        throw new Error(
          `Could not create the user ${product.name}. Error: ${err}`
        );
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }

  // Delete an Product
  async delete(id: string | number): Promise<Product> {
    if (client) {
      try {
        const sql = 'DELETE FROM products WHERE id = ($1)';
        const conn = await client.connect();
        const result = await conn.query(sql, [id]);
        conn.release();
        return result.rows[0];
      } catch (err) {
        throw new Error(`Could not delete the product ${id}. Error: ${err}`);
      }
    } else {
      throw new Error(`Cannot connect to the Database.`);
    }
  }
}
