const data = require("./data/dev-data/data-exporter.js");
const seed = require("./seed.js");

const db = require("./connection.js");

seed(data).then(() => db.end());

// Only run when I want to reset the development database. (npm run seed-development-database) Otherwise I can use nodemon as normal and nothing will be reset.
