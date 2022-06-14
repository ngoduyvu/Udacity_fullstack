import express, { Request, Response } from 'express';
import { Order, OrderStore } from '../models/orders';
import verifyAuthToken from '../middleware/verifyToken';

const store = new OrderStore();

const indexOrders = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.json(result);
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const showOrders = async (req: Request, res: Response) => {
  try {
    const result = await store.show(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const createOrders = async (req: Request, res: Response) => {
  const order: Order = {
    quantity: req.body.quantity,
    status: req.body.status,
    user_id: req.body.user_id,
    product_id: req.body.product_id,
  };
  try {
    const result = await store.create(order);
    res.json(result);
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const deleteOrders = async (req: Request, res: Response) => {
  try {
    const result = await store.delete(req.body.id);
    res.json(result);
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const order_routes = (app: express.Application) => {
  app.get('/orders/', indexOrders);
  app.get('/orders/:id', showOrders);
  app.post('/orders', verifyAuthToken, createOrders);
  app.delete('/orders/delete/:id', verifyAuthToken, deleteOrders);
};

export default order_routes;
