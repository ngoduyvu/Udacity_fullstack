import express from 'express';
import fs from 'fs';
import path from 'path';
import resize from '../../utilities/resize';

const processImg = express.Router();
const imgFolder: string = path.resolve('full');

processImg.get('/', async (req, res) => {
    let filename = req.query.filename as string;
    let height = parseInt(req.query.height as string);
    let width = parseInt(req.query.width as string);

    let imgPath = path.join(imgFolder, `${filename}.jpg`);
    console.log(imgPath);
    if (filename == null || !fs.existsSync(imgPath)) {
        res.status(400).send(`The image name ${filename} is invalid.`);
        return;
    };

    await resize(filename, width, height);
    res.status(200).send(`Processing the image ${filename}.`);
});

export default processImg;