const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Welcome to Dollars not Sense!');
  });
});
