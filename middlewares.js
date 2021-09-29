const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const { config } = require("./config")

module.exports = (express, app) => {
    require("dotenv").config();

    app.use(helmet());
    app.use(cors());
    if (!config.production) {
        app.use(morgan("dev"));
    }

    //

    app.use(express.json());
    // set the view engine to ejs
    app.set('view engine', 'ejs');
    app.use((req, res, next) => {
        res.set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
        next()
    })

}