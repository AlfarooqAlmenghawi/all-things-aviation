const express = require("express");
const app = express();

const { getAirports } = require("./MVC/controllers/airports.controller.js");

app.use(express.json());

app.get("/api/airports", getAirports);

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on local server 4000...");
  }
});

module.exports = app;
