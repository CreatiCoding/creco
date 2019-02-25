//routes.test.js
import * as request from "superagent";
import * as app from "./app";
import * as http from "http";
let server: http.Server;

beforeAll(async () => {
  server = await http.createServer(app).listen("3030");
  console.log("Jest starting!");
});

afterAll(() => {
  server.close();
  console.log("server closed!");
});

describe("basic route tests", () => {
  test("get home route GET /", async () => {
    const response = await request.get("localhost").set("port", "3000");
    expect(response.status).toEqual(200);
    expect(response).toEqual(true);
  });
});
