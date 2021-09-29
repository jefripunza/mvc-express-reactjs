const path = require("path");
const fs = require("fs");

const { public, views, fileNotFound } = require('../utils/response');
const matchTDP = require("./matchTDP"); // Title, Description, Picture

exports.index = (req, res, next) => {
    const now_path = req.params[0];
    const filename = now_path.replace(/^.*[\\\/]/, ''),
        isFile = String(filename).includes(".");
    if (!now_path.includes("socket.io")) {
        if (isFile) {
            const public_file = path.join(__dirname, "..", "public", now_path);
            if (fs.existsSync(public_file)) {
                return public(res, public_file);
            } else { // system
                const system_path = path.join(__dirname, "..", "system", "assets", now_path);
                if (fs.existsSync(system_path)) {
                    return public(res, system_path);
                } else {
                    return fileNotFound(res, now_path);
                }
            }
        } else {
            // if unique_path ? matchTDP : app name
            return views(res, 200, "index", matchTDP(now_path)); // Next to React JS Router Handler
        }
    } else {
        next();
    }
}