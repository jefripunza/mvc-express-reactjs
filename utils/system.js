const exec = require('child_process').exec;
var os = require('os');
const platform = os.platform(); // 'win32' 'linux' 'darwin'

function clear() {
    process.stdout.write("\u001b[2J\u001b[0;0H");
}

function closeApp(message) {
    setTimeout(() => {
        console.log(message);
        process.exit()
    }, 200);
}

function getProcessorID() {
    if (platform === 'win32') {
        exec("wmic CPU get ProcessorId", (error, stdout, stderr) => {
            return String(stdout).split('\n')[1];
        });
    } else if (platform === 'linux') {
        return false
    } else if (platform === 'darwin') {
        return false
    } else {
        return false
    }
}

module.exports = {
    clear,
    closeApp,
    //
    getProcessorID,
}