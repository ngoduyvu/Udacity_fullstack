import express from 'express';
import fs from 'fs';
import path from 'path';
import resize from '../../utilities/resize';
import {fileExist} from '../../utilities/fileExist';
import {filePath} from '../../utilities/fileExist';

const processImg = express.Router();

processImg.get('/', async (req: express.Request, res: express.Response) => {
  const filename = req.query.filename as string;
  const height = parseInt(req.query.height as string);
  const width = parseInt(req.query.width as string);

  let exist = await fileExist('full', filename);

  if (filename == null || !exist) {
    res.status(400).send(`The image name ${filename} is invalid.`);
    return;
  }

  exist = await fileExist('thumb', `${filename}_${height}_${width}`);
  if(exist) {
    res.status(200).sendFile(filePath('thumb', `${filename}_${height}_${width}`));
    res.send(`File ${filename}_${height}_${width} already exist.`)
    return;
  }

  if (
    height <= 0 ||
    isNaN(height) == true ||
    width <= 0 ||
    isNaN(width) == true
  ) {
    res.status(400).send(`The parameters hight or width are not correct.`);
    return;
  }
  await resize(filename, width, height);
  res.status(200).sendFile(filePath('thumb', `${filename}_${height}_${width}`));
  res.send(`Processing the image ${filename}.`);
});

export default processImg;
