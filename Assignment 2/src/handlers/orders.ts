import express, { Request, Response } from 'express';
import { Order, OrderStore } from "../models/orders";
import authenticate from "../middleware/verifyToken";

const store = new OrderStore();

const createOrder = async (req: Request, res: Response) => {
    const order: Order = {
        id: req.body.id,
        quantity: req.body.quantity,
        status: req.body.status,
        user_id: req.body.user_id,
      };
    try {
        
        const addedProduct = await store.create(order);
        res.json(addedProduct);
    } catch (err) {
        res.status(400);
        res.json(err);
      
    };

};

const deleteOrders = async (req: Request, res: Response) => {
    try {
        const result = await store.delete(req.body.id);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    }
};

const byUserOrders = async (req: Request, res: Response) => {
    try {
        const result = await store.show(req.body.id);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);        
    }
};





const order_routes = (app: express.Application) => {
    app.post('/orders/users/:id', createOrder);
    app.get('/orders/users/:id', authenticate, byUserOrders);
    app.delete('/orders', deleteOrders);
};

export default order_routes;