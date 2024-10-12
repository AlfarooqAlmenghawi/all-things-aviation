const request = require("supertest");
const app = require("../app.js");
const db = require("../database-handling/connection.js");
const seed = require("../database-handling/seed.js");
const data = require("../database-handling/connection.js");

beforeAll(() => seed(data));

afterAll(() => db.end());

describe("GET", () => {
  test("/api/airports/ --> 406: Returns status 406 Not Acceptable when airports are empty", () => {
    return request(app).get("/api/airports/").expect(406);
  });

  test("/api/airports/ --> 406: Returns empty array when airports table is empty", () => {
    return request(app)
      .get("/api/airports/")
      .expect(406)
      .then(({ text }) => {
        console.log(text); // This test uses { text } to destructure the message because it's not an object.
        expect(text).toEqual("There are no airports stored in the database.");
      });
  });
});
