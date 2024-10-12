const db = require("../../database-handling/connection.js");

const fetchAirports = () => {
  return db.query(`SELECT * FROM airports;`);
};

const addAirport = (airportToAdd) => {
  return db
    .query(
      `INSERT INTO 
        airports (airport_name, airport_code, airport_location)
        VALUES 
        ($1, $2, $3) 
        RETURNING *;`,
      [
        airportToAdd.airport_name,
        airportToAdd.airport_code,
        airportToAdd.airport_location,
      ]
    )
    .then(({ rows }) => {
      return rows[0];
    });
};

module.exports = { fetchAirports, addAirport };
