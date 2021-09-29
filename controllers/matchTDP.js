const { config } = require("../config");
const separate = " | ";

function match(now_path) {
    if (now_path === "/") {
        return {
            title: config.app_name,
            description: config.description,
            path: now_path,
        }
    } else {
        // matching
        return {
            title: "Other Page" + separate + config.app_name,
            description: "",
            picture: "",
            path: now_path,
        }
    }
}

module.exports = match;