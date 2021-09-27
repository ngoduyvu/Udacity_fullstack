import express from 'express';
import { runInContext } from 'vm';
import sharp from 'sharp';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server started at localhost: ${port}`);
});

let resize = async function(imagePath: string, size: number, outputPath: string) {
  return await sharp(imagePath).resize(size).toFile(outputPath);

} 
