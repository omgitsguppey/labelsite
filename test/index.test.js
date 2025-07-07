const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('serves the home page HTML', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
    expect(response.text).toContain('<title>Dollars not Sense</title>');
  });
});
