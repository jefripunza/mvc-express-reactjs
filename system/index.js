const errorHandling = require("./errorHandling");

module.exports = (app) => {

    app.use(errorHandling.notFound);
    app.use(errorHandling.Handler);

}