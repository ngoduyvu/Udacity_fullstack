"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../models/products");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const store = new products_1.ProductStore();
const indexProducts = async (_req, res) => {
    try {
        const result = await store.index();
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
    ;
};
const showProducts = async (req, res) => {
    try {
        const result = await store.show(req.params.id);
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
    ;
};
const createProducts = async (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    };
    try {
        const result = await store.create(product);
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
    ;
};
const deleteProducts = async (req, res) => {
    try {
        const result = await store.delete(req.params.id);
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
    ;
};
const product_rounter = (app) => {
    app.get('/products', indexProducts);
    app.get('/products/:id', showProducts);
    app.post('/products', verifyToken_1.default, createProducts);
    app.delete('/product/delete/:id', verifyToken_1.default, deleteProducts);
};
exports.default = product_rounter;
