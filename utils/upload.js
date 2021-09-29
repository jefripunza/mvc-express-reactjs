const fs = require("fs");

function upload(files, path, onSuccess, onError) {
    fs.readFile(files.path, function (err, data) {
        fs.writeFile(path, data, function (error) {
            if (error) {
                onError(error);
            } else {
                onSuccess();
            }
        });
    });
}

module.exports = upload;