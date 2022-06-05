import { Product, ProductStore } from "../products";
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
const product = new ProductStore();
let testUser: { text: string };

describe("Product Model", () => {
    beforeAll(async() => {
        testUser = await request.post('/users').send({
            username: 'test-user',
            firstName: 'Ngo',
            lastName: 'Duy Vu',
            password: '12312'
        })
    });

    it('Should have an index method', () => {
        expect(product.index).toBeDefined();
    });

    it('Should have a show method', () => {
        expect(product.show).toBeDefined();
    });

    it('Should have a create method', () => {
        expect(product.create).toBeDefined();
    });

    it('Should have an delete method', () => {
        expect(product.delete).toBeDefined();
    });

    // it('Create method should add a product', async() =>{
    //     const result = await product.create({
    //         id: 1,
    //         name: "Samsung Galaxy S10",
    //         price: 14000,
    //         category: 'Electronic',
    //     });
    // });
});