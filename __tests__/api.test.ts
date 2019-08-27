import request from 'supertest'
import app from '../app'

test('it responds successfully to GET /', () => {
    return request(app).get('/').expect(200);
});

test('it responds successfully on a POST /', () => {
    return request(app).post('/').expect(200);
});
