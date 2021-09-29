const Database = require("./advance-json-database");
const path = require("path");

const database = new Database(path.join(__dirname, "database", "user.json"));

module.exports = {
    database,

}