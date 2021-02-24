const db = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "",
    database: "library"
  }
});
module.exports = db
