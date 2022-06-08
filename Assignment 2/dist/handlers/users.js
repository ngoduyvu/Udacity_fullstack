"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const store = new users_1.UserStore();
const indexUsers = async (_req, res) => {
    try {
        const result = await store.index();
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const showUsers = async (req, res) => {
    try {
        const result = await store.show(req.params.username);
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const createUsers = async (req, res) => {
    const user = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    };
    try {
        const result = await store.create(user);
        var token = jsonwebtoken_1.default.sign({ user: result }, process.env.TOKEN_SECRET);
        console.log(token);
        res.json({ ...result, token: `Token ${token}` });
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const deleteUsers = async (req, res) => {
    try {
        const result = await store.delete(req.params.id);
        res.json(result);
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const authenticate = async (req, res) => {
    try {
        const result = await store.authenticate(req.params.username, req.params.password);
        var token = jsonwebtoken_1.default.sign({ user: result }, process.env.TOKEN_SECRET);
        res.json({ ...result, token: `Token ${token}` });
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
const user_routers = (app) => {
    app.get('/users', indexUsers);
    app.get('/users/:username', showUsers);
    app.post('/users', verifyToken_1.default, createUsers);
    app.post('/users/authenticate', authenticate);
    app.delete('/users/delete/:id', verifyToken_1.default, deleteUsers);
};
exports.default = user_routers;
