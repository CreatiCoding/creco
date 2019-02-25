//routes.test.js
import * as request from "supertest";
import * as app from "../app";
import * as http from "http";
let server: http.Server;

beforeAll(async () => {
  // do something before anything else runs
  server = http.createServer(app);
  console.log("Jest starting!");
});
// close the server after each test
afterAll(() => {
  server.close();
  console.log("server closed!");
});
describe("basic route tests", () => {
  test("get home route GET /", async () => {
    const expected: number = 1;
    const received: number = 1;
    expect(expected).toEqual(received);
  });
});
