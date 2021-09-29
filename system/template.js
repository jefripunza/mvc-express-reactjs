console.log("Hello Template...");

const path = require("path"),
    express = require("express"),
    app = express(),
    morgan = require("morgan"),
    helmet = require("helmet")

const { clear } = require("../utils/system")
clear()

const port = process.env.PORT || 4000;
const path_template = path.join(__dirname, "..", 'template');

app.use(express.static(path_template));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    return res.sendFile(path.join(path_template, "index.html"))
})

app.listen(port, () => {
    console.log("Template : Express server listening on port %d", port);
})