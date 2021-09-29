const { Database } = require("./advance-json-database");
const path = require("path");

// connection
const databaseUser = new Database(path.join(__dirname, "database", "user.json"));

// add your database function in here

function listUser() {
    return databaseUser.read();
}

function addUser(data, onResult) {
    databaseUser.add(data, result => {
        onResult(result)
    })
}

function editUser(_id, data, onResult) {
    databaseUser.update(_id, data, result => {
        onResult(result)
    })
}

function deleteUser(_id, onResult) {
    databaseUser.delete(_id, result => {
        onResult(result)
    })
}

module.exports = {
    databaseUser,
    //
    listUser,
    addUser,
    editUser,
    deleteUser,
}