"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../users");
const user = new users_1.UserStore();
describe("Order Model", () => {
    it('Should have an index method', () => {
        expect(user.index).toBeDefined();
    });
    it('Should have a show method', () => {
        expect(user.show).toBeDefined();
    });
    it('Should have a create method', () => {
        expect(user.create).toBeDefined();
    });
    it('Should have a delete method', () => {
        expect(user.delete).toBeDefined();
    });
    it('Create method should add a user', async () => {
        const result = await user.create({
            id: 1,
            username: 'test',
            password: 'fullstack123'
        });
        expect(result).toBeTrue();
    });
});
