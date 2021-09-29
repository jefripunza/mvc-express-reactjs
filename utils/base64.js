const fileBase64 = require('file-base64');

function fileToBase64encode(path_file) {
    fileBase64.encode(path_file, function (err, base64String) {
        console.log(base64String);
    });
}
function fileToBase64decode(base64String, output_path_file) {
    fileBase64.decode(base64String, output_path_file, function (err, output) {
        console.log('success');
    });
}

module.exports = {
    fileToBase64decode,
    fileToBase64encode,
}