const fetchAirports = require("../models/airports.model.js");

const getAirports = (request, response) => {
  return fetchAirports().then(({ rows }) => {
    console.log(rows);
    if (rows.length === 0) {
      response
        .status(406)
        .send("There are no airports stored in the database."); // I've decided to send the error as a text instead of an object containing the error code and the custom message.
    } else {
      response.status(200).send(rows);
    }
  });
};

module.exports = { getAirports };
