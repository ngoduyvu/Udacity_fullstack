import express from 'express';
import { runInContext } from 'vm';
import sharp from 'sharp';
import logger from './utilities/logger'

const app = express();
const port = 3000;

// app.get('/api', logger, (req, res) => {
//   res.send('Hello World');
// });



app.get('/api/image', async function(req, res, next) {
  try {
    let filename = String(req.query.filename);
    let width = Number(req.query.width);
    let height = Number(req.query.height);
    console.log(typeof(filename));
    console.log(width);
    console.log(height);
    await resize(filename, width, height)
    res.send(`${filename} has width: ${width} and height: ${height}`);
    // await sharp("./src/encenadaport.jpg")
    // .resize({
    //   width: 150,
    //   height: 97
    // })
    // .toFormat("jpeg", { mozjpeg: true })
    // .toFile("sammy-resized-compressed.jpeg");
  } catch (error) {
    next(error);
  }
});


app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

let resize = async function(filename: string, width: number, height: number) {
  console.log(filename + ".jpg")
  await sharp("./full/" + filename + ".jpg").resize(width, height).toFile("./thumb/" + filename + "_thumb" + ".jpg");
} 
