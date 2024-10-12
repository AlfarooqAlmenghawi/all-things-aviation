const express = require("express");
const app = express();

const {
  getAirports,
  postAirport,
} = require("./MVC/controllers/airports.controller.js");

app.use(express.json());

app.get("/api/airports", getAirports);

app.post("/api/airports", postAirport);

app.use((error, request, response, next) => {
  /* checks if a custom error format was made -> */ if (
    error.status &&
    error.message
  ) {
    response.status(error.status).send({ message: error.message });
  }
  next(error);
});

module.exports = app;
