const db = require("./connection.js");
const format = require("pg-format");
const airports = require("./data/dev-data/airports.js");

const seed = ({ airports }) => {
  return db.query(`DROP TABLE IF EXISTS airports CASCADE;`).then(() => {
    return db.query(`DROP TABLE IF EXISTS airlines CASCADE;`);
  });
};

module.exports = seed;
