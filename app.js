const express = require("express");
const app = express();

const {
  getAirports,
  postAirport,
} = require("./MVC/controllers/airports.controller.js");

app.use(express.json());

app.get("/api/airports", getAirports);

app.post("/api/airports", postAirport);

module.exports = app;
