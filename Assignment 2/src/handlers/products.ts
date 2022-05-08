import express, {Request, Response} from 'Express';
import {Product, ProductStore} from "../models/products";
import authenticate from '../middleware/verifyToken';

const store = new ProductStore();

const indexProducts = async (_req: Request, res: Response) => {
    try {
        const result = await store.index();
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    };
};

const showProducts = async (req: Request, res: Response) => {
    try {
        const result = await store.show(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    };
};

const createProducts = async (req: Request, res: Response) => {
    const product:Product = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    };

    try {
        const result = await store.create(product);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    };
};

const deleteProducts = async (req: Request, res: Response) => {
    try {
        const result = await store.delete(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    };
}

const product_rounter = (app: express.Application) => {
    app.get('/products', indexProducts);
    app.get('/products/:id', showProducts);
    app.post('/products', authenticate, createProducts);
    app.delete('/product/delete/:id', authenticate, deleteProducts);
};

export default product_rounter;