"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const store = new users_1.UserStore();
const indexUsers = async (_req, res) => {
    try {
        const result = await store.index();
        res.json(result);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
    ;
};
const showUsers = async (req, res) => {
    try {
        const result = await store.show(req.params.id);
        res.json(result);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
    ;
};
const createUsers = async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
    };
    try {
        const result = await store.create(user);
        res.json(result);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
    ;
};
const deleteUsers = async (req, res) => {
    try {
        const result = await store.delete(req.params.id);
        res.json(result);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
    ;
};
const user_router = (app) => {
    app.get('/users', indexUsers);
    app.get('/users/:id', showUsers);
    app.post('/users', verifyToken_1.default, createUsers);
    app.delete('/users/delete/:id', verifyToken_1.default, deleteUsers);
};
exports.default = user_router;
