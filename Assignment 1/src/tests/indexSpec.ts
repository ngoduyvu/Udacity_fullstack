import supertest from 'supertest';
import app from '../index';
import resize from '../utilities/resize';

const INVALID_FILES = ["file1", "file2", "abcwr", "ghw", "bjskw;"];
const VALID_FILES = ["encenadaport", "fjord", "icelandwaterfall", "palmtunnel", "santamonica"];

let randomIndex = Math.floor(Math.random() * 5);

const request = supertest(app);
describe('Test Main API Endpoint Response', () => {
    it('Test the API endpoint', async (done) => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
        done();
    });

    it('Test Process Image Endpoint', async(done) => {
        const response = await request.get(`/api/image?filename=${VALID_FILES[randomIndex]}&height=200&width=200`);
        expect(response.status).toBe(200);
        done();
    });

    it('Test Invalid Image Name', async(done) => {
        const response = await request.get(`/api/image?filename=${INVALID_FILES[randomIndex]}&height=200&width=200`);
        expect(response.status).toBe(400);
        done();       
    });
});