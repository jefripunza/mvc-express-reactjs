const { Database } = require("./models/advance-json-database");

const test_data = [
    { nama: 'aaaa', _id: 'HmiSUROOlmWkKLuOJG0Z' },
    { nama: 'bbb', _id: '4aOSlpgCucfPeR4FH9VL' },
    { nama: 'cc', _id: 'BVsKi3QbA47zmuNpbcY1' }
]

const database = new Database("./test.js", test_data)

database.updateAll(test_data, result => {
    console.log(result)
})