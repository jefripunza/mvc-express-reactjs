const child_process = require('child_process');
const print = require("./print");

function installNPM() {
    child_process.exec("npm install", (error, stdout, stderr) => {
        let ok = 0
        if (error) {
            console.log(`error: ${error.message}`);
        } else {
            ok += 1
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
        } else {
            ok += 1
        }
        if (ok >= 2) {
            console.log(`stdout: ${stdout}`);
            print("please run again!", "success");
        } else {
            print("Oh Nooooo!, error : " + error + " || stderr : " + stderr, "error");
        }
        process.exit();
    });
}

module.exports = {
    installNPM,
}