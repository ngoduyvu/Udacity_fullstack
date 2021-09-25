import express from 'express';
import { runInContext } from 'vm';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server started at localhost: ${port}`);
});