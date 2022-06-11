"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orders_1 = require("../models/orders");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const store = new orders_1.OrderStore();
const indexOrders = async (_req, res) => {
    try {
        const result = await store.index();
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const showOrders = async (req, res) => {
    try {
        const result = await store.show(req.body.id);
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const createOrders = async (req, res) => {
    const order = {
        quantity: req.body.quantity,
        status: req.body.status,
        user_id: req.body.user_id
    };
    try {
        const result = await store.create(order);
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const deleteOrders = async (req, res) => {
    try {
        const result = await store.delete(req.body.id);
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const order_routes = (app) => {
    app.get('/orders/', indexOrders);
    app.get('/orders/:id', showOrders);
    app.post('/orders', verifyToken_1.default, createOrders);
    app.delete('/orders/delete/:id', verifyToken_1.default, deleteOrders);
};
exports.default = order_routes;
