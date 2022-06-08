"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../models/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
const request = (0, supertest_1.default)(server_1.default);
const user = new users_1.UserStore();
let testUser_1;
const testUser_2 = {
    username: 'test-user-2',
    firstName: 'Jonny',
    lastName: 'Depp',
    password: 'Private-Caribbean'
};
describe('Users Model', () => {
    beforeAll(async () => {
        testUser_1 = await request.post('/users').send({
            username: 'test-user-1',
            firstName: 'Ngo',
            lastName: 'Duy Vu',
            password: '12312'
        });
    });
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
    it('Should get the user test-user-1', async () => {
        const result = await user.index();
        expect(result.length).toBeGreaterThan(0);
    });
    it('Should create the user test-user-2 and encryp password', async () => {
        const spy = spyOn(bcrypt_1.default, 'hashSync').and.callThrough();
        const result = await user.create(testUser_2);
        expect(result.username).toEqual(testUser_2.username);
        expect(spy).toHaveBeenCalled();
    });
    it('Should authenticate fail', async () => {
        const result = await user.authenticate(testUser_2.username, 'wrong password');
        expect(result).toBeFalsy();
    });
    // it('Should get the  the user test-user-2', async () => {
    //   const result = await user.index();
    //   expect(result.length).toBeGreaterThan(0);
    // });
    // it('Create method should add a user', async() => {
    //     const result = await user.create({
    //         username: 'test-user-2',
    //         firstName: 'Jack',
    //         lastName: 'Sarrow',
    //         password: 'password123'
    //     });
    //     expect(result.username).toBeTrue(user.username);
    // });
});
