const Controller = require('./controllers');
const ControllerBackend = require("./controllers/backend")

module.exports = (app) => {

    app.get("*", Controller.index); // paling bawah

    app.post("/backend/:request", ControllerBackend.request);
    app.post("/backend/:request/:mode", ControllerBackend.request_mode);

}