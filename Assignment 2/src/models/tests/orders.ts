import { Order, OrderStore } from "../orders";

const order = new OrderStore();

describe("Order Model", () => {
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

    it('Create method should add an order', async() => {
        const result = await order.create({
            id: 1,
            quantity: 1,
            status: "Expired",
            user_id: 1,
        });
        expect(result).toEqual([{
            id: 1,
            quantity: 1,
            status: "Expired",
            user_id: 1,
        }]);
    })
});