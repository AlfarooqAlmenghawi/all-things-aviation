const db = require("../../database-handling/connection.js");

const fetchAirports = () => {
  return db.query(`SELECT * FROM airports;`);
};

module.exports = fetchAirports;
