import express from 'express';
//import { runInContext } from 'vm';
//import sharp from 'sharp';
//import resize from './utilities/resize';
//import logger from './utilities/logger';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);



// app.get('/api/image', async function(req, res, next) {
//   try {
//     let filename = String(req.query.filename);
//     let width = Number(req.query.width);
//     let height = Number(req.query.height);
//     console.log(typeof(filename));
//     console.log(width);
//     console.log(height);
//     await resize(filename, width, height)
//     res.send(`${filename} has width: ${width} and height: ${height}`);
//   } catch (error) {
//     next(error);
//   }
// });


app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;