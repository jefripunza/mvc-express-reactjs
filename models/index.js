const { Database } = require("./advance-json-database");
const path = require("path");

const database = new Database(path.join(__dirname, "database", "user.json"));

// add your database function in here

function addUser(data, onResult) {
    database.add(data, result => {
        onResult(result)
    })
}

module.exports = {
    database,

    addUser,
}