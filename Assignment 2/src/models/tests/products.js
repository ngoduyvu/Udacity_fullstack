"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../products");
const product = new products_1.ProductStore();
describe("Product Model", () => {
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
    it('Create method should add a product', async () => {
        const result = await product.create({
            id: 1,
            name: "Samsung Galaxy S10",
            price: 14000,
            category: 'Electronic',
        });
    });
});
