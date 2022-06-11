import express, { Request, Response } from 'Express';
import { User, UserStore } from '../models/users';
import verifyAuthToken from '../middleware/verifyToken';
import jwt from 'jsonwebtoken';

const store = new UserStore();

const indexUsers = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.json(result);
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const showUsers = async (req: Request, res: Response) => {
  try {
    const result = await store.show(req.params.username);
    res.json(result);
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const createUsers = async (req: Request, res: Response) => {
  const user: User = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password
  };

  try {
    const result = await store.create(user);
    var token = jwt.sign({ user: result }, process.env.TOKEN_SECRET as string);
    res.json({ ...result, token: `Token ${token}` });
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const deleteUsers = async (req: Request, res: Response) => {
  try {
    const result = await store.delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const authenticate = async (req: Request, res: Response) => {
  try {
    const result = await store.authenticate(
      req.params.username,
      req.params.password
    );
    var token = jwt.sign({ user: result }, process.env.TOKEN_SECRET as string);
    res.json({ ...result, token: `Token ${token}` });
  } catch (err) {
    res.status(401);
    res.json(err);
  }
};

const user_routers = (app: express.Application) => {
  app.get('/users', indexUsers);
  app.get('/users/:username', verifyAuthToken, showUsers);
  app.post('/users', createUsers);
  app.post('/users/authenticate', authenticate);
  app.delete('/users/delete/:id', verifyAuthToken, deleteUsers);
};

export default user_routers;
