// import * as request from "supertest";
import * as app from "../app";
import * as http from "http";
import * as request from "request";

let server: http.Server;
const isRunning = true;

beforeAll(() => {
  if (!isRunning) {
    var port = "3000";
    server = http.createServer(app);
    server.listen(port);
  }
});
afterAll(() => {
  if (!isRunning) {
    server.close();
  }
});

describe("basic tests", () => {
  test("ts-jest test", () => {
    const expected: number = 1;
    const received: number = 1;
    expect(expected).toEqual(received);
  });
  test("ts-jest server", async () => {
    const expected: number = 1;
    const received: number = 1;
    request.get({ url: "http://127.0.0.1:3000/str", json: true }, function(
      e,
      r,
      user
    ) {
      console.log(r);
    });
    expect(expected).toEqual(received);
  });
});
