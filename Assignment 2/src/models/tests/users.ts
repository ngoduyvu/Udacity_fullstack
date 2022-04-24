import { User, UserStore } from "../users";
import client from "../../database";

const user = new UserStore();

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
    
    it('Create method should add a user', async() => {
        const result = await user.create({
            id: 1,
            username: 'test',
            password: 'fullstack123'
        });
        expect(result).toBeTrue();
    });


});

