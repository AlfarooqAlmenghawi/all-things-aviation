const db = require("./connection.js");
const format = require("pg-format");
const airports = require("./data/dev-data/airports.js");

const seed = ({ airports }) => {
  return db
    .query(`DROP TABLE IF EXISTS airports CASCADE;`)
    .then(() => {
      return db.query(`DROP TABLE IF EXISTS airlines CASCADE;`);
    })
    .then(() => {
      return createTableAirports();
    })
    .then(() => {});
};

function createTableAirports() {
  return db.query(`CREATE TABLE airports (
    airport_id SERIAL PRIMARY KEY,
    airport_name VARCHAR(100),
    airport_code VARCHAR(3),
    airport_location VARCHAR(50)
    )`);
}

module.exports = seed;
