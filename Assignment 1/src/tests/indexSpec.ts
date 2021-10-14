import supertest from 'supertest';
import app from '../index';
import fs from 'fs';
import path from 'path';
import resize from '../utilities/resize';
import {fileExist} from '../utilities/fileExist';
import {filePath} from '../utilities/fileExist';

const INVALID_FILES = ['file1', 'file2', 'abcwr', 'ghw', 'bjskw;'];
const VALID_FILES = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
];

const randomIndex: number = Math.floor(Math.random() * 5);
const negativeNumber: number = Math.floor(Math.random() * 200) * -1;
const imgFolder: string = path.resolve('thumb');

const request = supertest(app);
describe('Test Utilities Functions', () => {
  it('Test Resize 1', async (done) => {
    await resize(VALID_FILES[randomIndex], 300, 500);
    const imgPath = path.join(imgFolder,
        `${VALID_FILES[randomIndex]}_500_300.jpg`);
    expect(fs.existsSync(imgPath)).toBe(true);
    done();
  });

  it('Test Resize 2', async (done) => {
    await resize(VALID_FILES[randomIndex], 500, 800);
    const imgPath = path.join(imgFolder,
        `${VALID_FILES[randomIndex]}_800_500.jpg`);
    expect(fs.existsSync(imgPath)).toBe(true);
    done();
  });

  it('Test Check File-Exist function True', async (done) => {
    const exist = await fileExist('thumb', 'encenadaport_200_200');
    expect(exist).toBe(true);
    done();
  });

  it('Test Check File-Exist function Frue', async (done) => {
    const exist = await fileExist('thumb', 'Fakename_200_200');
    expect(exist).toBe(false);
    done();
  });
  
  it('Test Check File-Exist function Frue', async (done) => {
    const path = filePath('thumb', 'santamonica_200_200');
    expect(path).toBe("C:\\Full Stack\\Assignment 1\\Udacity_fullstack\\Assignment 1\\thumb\\santamonica_200_200.jpg");
    done();
  });
  
});

describe('Test Main API Endpoint Response', () => {
  it('Test the API endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });

  it('Test Process Image Endpoint', async (done) => {
    const response = await request.get(
        `/api/image?filename=${VALID_FILES[randomIndex]}&height=200&width=200`,
    );
    expect(response.status).toBe(200);
    done();
  });

  it('Test Invalid Image Name', async (done) => {
    const response = await request.get(
        `/api/image?filename=${INVALID_FILES[randomIndex]}&height=200&width=200`,
    );
    expect(response.status).toBe(400);
    done();
  });

  it('Test Negative Height and Width', async (done) => {
    const response = await request.get(
        `/api/image?filename=${VALID_FILES[randomIndex]}
        &height=${negativeNumber}&width=${negativeNumber}`,
    );
    expect(response.status).toBe(400);
    done();
  });

  it('Test Zero Height and Width', async (done) => {
    const response = await request.get(
        `/api/image?filename=${VALID_FILES[randomIndex]}&height=0&width=0`,
    );
    expect(response.status).toBe(400);
    done();
  });

  it('Test New Image File Created', async (done) => {
    await request.get(
        `/api/image?filename=${VALID_FILES[randomIndex]}
        &height=200&width=200`,
    );
    const imgPath = path.join(imgFolder,
        `${VALID_FILES[randomIndex]}_200_200.jpg`);
    expect(fs.existsSync(imgPath)).toBe(true);
    done();
  });
});
