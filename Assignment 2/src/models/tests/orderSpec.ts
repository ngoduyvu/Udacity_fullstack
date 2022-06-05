import { Order, OrderStore } from "../orders";
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);
const order = new OrderStore();
let testUser: { text: string };

describe("Order Model", () => {

    beforeAll(async() => {
        testUser = await request.post('/users').send({
            username: 'test-user',
            firstName: 'Ngo',
            lastName: 'Duy Vu',
            password: '12312'
        })
    });

    it('Should have an index method', () => {
        expect(order.index).toBeDefined();
    });

    it('Should have a show method', () => {
        expect(order.show).toBeDefined();
    });

    it('Should have a create method', () => {
        expect(order.create).toBeDefined();
    });

    it('Should have a delete method', () => {
        expect(order.delete).toBeDefined();
    });

    // it('Create method should add an order', async() => {
    //     const result = await order.create({
    //         id: 1,
    //         quantity: 1,
    //         status: "Expired",
    //         user_id: 1,
    //     });
    //     expect(result).toEqual([{
    //         id: 1,
    //         quantity: 1,
    //         status: "Expired",
    //         user_id: 1,
    //     }]);
    // })
});