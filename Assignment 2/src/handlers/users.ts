import express, {Request, Response} from 'Express';
import {User, UserStore} from "../models/users";
import authenticate from '../middleware/verifyToken';

const store = new UserStore();

const indexUsers = async (_req: Request, res: Response) => {
    try {
        const result = await store.index();
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    };
};

const showUsers = async (req: Request, res: Response) => {
    try {
        const result = await store.show(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    };
};

const createUsers = async (req: Request, res: Response) => {
    const user:User = {
        username: req.body.username,
        password: req.body.password,
    };

    try {
        const result = await store.create(user);
        res.json(result);   
    } catch (err) {
        res.status(400);
        res.json(err);
    };
};

const deleteUsers = async (req: Request, res: Response) => {
    try {
        const result = await store.delete(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(400);
        res.json(err);
    };
};

const user_router = (app: express.Application) => {
    app.get('/users', indexUsers);
    app.get('/users/:id', showUsers);
    app.post('/users', authenticate, createUsers);
    app.delete('/users/delete/:id', authenticate, deleteUsers);

};

export default user_router;
