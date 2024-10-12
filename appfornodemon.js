const express = require("express");
const app = express();

app.use(express.json());

app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on local server 4000...");
  }
});

module.exports = app;
