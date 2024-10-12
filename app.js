const express = require("express");
const app = express();

const { getAirports } = require("./MVC/controllers/airports.controller.js");

app.use(express.json());

app.get("/api/airports", getAirports);

module.exports = app;
