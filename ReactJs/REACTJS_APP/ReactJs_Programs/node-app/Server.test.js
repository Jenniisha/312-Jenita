//const supertest = require("supertest");
import supertest from 'supertest';
import app from './app';



//Testing
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

// test("GET/", async () => {
//     await supertest(app).get("/")
//         .expect(response.statusCode).toBe(200);
// });
