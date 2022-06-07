import { User, UserStore } from '../models/users';
import client from '../database';
import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
const user = new UserStore();
let testUser: { text: string };

describe('Users Model', () => {
  beforeAll(async () => {
    testUser = await request.post('/users').send({
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

  it('Create method should add a user', async() => {
      const result = await user.create({
          username: 'test-user-2',
          firstName: 'Jack',
          lastName: 'Sarrow',
          password: 'password123'
      });
      expect(result).toBeTrue();
  });
});

