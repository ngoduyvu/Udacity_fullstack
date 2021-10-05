import { request } from 'http';
import sharp from 'sharp';
import resize from '../utilities/resize'

// describe('newArr should add new item into array', async() => {
//     let sharpImageObject = await resize('./full/fjord.jpg', 200, 100);
// });
describe('Test API endpoint response', () => {
    it('Get the API endpoint', async () =>{
        const response = await request.get('/')
    })
});