import * as request from 'supertest';
import * as app from '../app';

test('Hello world works', async () => {
    const response = await request(app.callback()).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('true');
});