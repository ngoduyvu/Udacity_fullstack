import express from 'express';
import logger from '../utilities/logger';
import processImg from './api/processImg';

const routes = express.Router();

routes.get('/', logger, (req: express.Request, res: express.Response): void => {
  res.status(200).send('OK');
});

routes.use('/image', processImg);

export default routes;
