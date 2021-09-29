const { config } = require("./config")
const { clear } = require("./utils/system");
clear(); // space CLI

const server = require('./app');

// standard Heroku App
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

server.listen(port, host, () => {
    console.log("Express server listening on port %d in %s mode", port, config.environment);
});