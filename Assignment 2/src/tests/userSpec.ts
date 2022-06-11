import { User, UserStore } from '../models/users';
import bcrypt from 'bcrypt';
import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
const user = new UserStore();

let testUser_1: { text: string };

const testUser_2: User = {
  username: 'test-user-2',
  firstName: 'Jonny',
  lastName: 'Depp',
  password: 'Private-Caribbean'
};

const testUser_3: User = {
  username: 'test-user-3',
  firstName: 'Amber',
  lastName: 'Head',
  password: 'Aquaman'
};


describe('Test User Model Method Exists', () => {
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
});

describe('Test User Model Method Functional', () => {
  it('Should create the user test-user-2 and encryp password', async () => {
    const spy = spyOn(bcrypt, 'hashSync').and.callThrough();
    const result: User = await user.create(testUser_2);
    expect(result.username).toEqual(testUser_2.username);
    expect(spy).toHaveBeenCalled();
  });

  it('Should have user in the table', async () => {
    const result = await user.index();
    expect(result.length).toBeGreaterThan(0);
  });

  it('Should get username test-user-2', async () => {
    const result = await user.show('test-user-2');
    expect(result.username).toEqual('test-user-2');
  });

  it('Should delete test-user-2', async () => {
    await user.delete('test-user-2');
    const result = await user.show('test-user-2');
    expect(result).toBeUndefined();                    // Should test-user-2 not exist in the table
  });
});

describe('Test User API Endpoint Response', () => {
  // Test Create
  it('Should create a user in the Endpoint', async () => {
    const response = await request
      .post('/users')
      .send(testUser_3)
    expect(response.status).toEqual(200);
  });

  // Test Show
  it('Should get user by ID in the Endpoint', async () => {
    const response = await request
      .get('/users/test-user-3')
      .set({ Authorization: JSON.parse(testUser_1.text).token });
    const result = JSON.parse(response.text);
    expect(result.username).toEqual('test-user-3');
  });

  // Test Index
  it('Should list product in the Endpoint', async () => {
    const response = await request.get('/users');
    const result = JSON.parse(response.text);
    expect(result.length).toBeTruthy();
  });

  // Test Authenticate
  it('Should authenticate fail', async () => {
    const result = await user.authenticate(testUser_3.username, 'wrong password');
    expect(result).toBeFalsy();
  });

  it('Should authenticate an user', async () => {
    const response = await request
      .post('/users/authenticate')
      .send({ username: 'test-user-4', password: 'assignment 2' });
    const result = JSON.parse(response.text);
    expect(result.token).toBeTruthy();
  });

  // Test Delete
  it('Should return 200 when delete user', async () => {
    const response = await request
    .delete('/users/delete/1')
    .set({ Authorization: JSON.parse(testUser_1.text).token });
    expect(response.statusCode).toBe(200);
  });
});