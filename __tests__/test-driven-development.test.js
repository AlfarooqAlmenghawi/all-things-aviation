const request = require("supertest");
const app = require("../app.js");
const db = require("../database-handling/connection.js");
const seed = require("../database-handling/seed.js");
const data = require("../database-handling/connection.js");

beforeEach(() => seed(data));

afterAll(() => db.end());

describe("", () => {
  test("", () => {});
});
