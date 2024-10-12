const db = require("../../database-handling/connection.js");

const fetchAirports = () => {
  return db.query(`SELECT * FROM airports;`);
};

const addAirport = (airportToAdd) => {
  return fetchAirports().then(({ rows }) => {
    console.log(rows, " the current table");
    // For loop below is setup to throw an error if it attempts to post data that already exists in the airports table. Two airports can't exist at once on this earth, so neither can they on tables.
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].airport_name === airportToAdd.airport_name) {
        return Promise.reject({
          status: 403,
          message: "Airport data already exists.",
        });
      }

      if (rows[i].airport_code === airportToAdd.airport_code) {
        return Promise.reject({
          status: 403,
          message: "Airport data already exists.",
        });
      }
    }

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
        return { newSuccessfullyAddedAirport: rows[0] };
      });
  });
};

module.exports = { fetchAirports, addAirport };
