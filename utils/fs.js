const fs = require("fs");
const path = require("path");

const isFileFolderExist = (this_path) => fs.existsSync(this_path);

function mkdir(target, onSuccess) {
    fs.mkdir(target, () => {
        onSuccess();
    });
}

function readFile(path_file) {
    return fs.readFileSync(path_file, { encoding: 'utf-8' });
}

function writeFile(path_file, content, onSuccess, onError) {
    fs.writeFile(path_file, content, function (err) {
        if (err) {
            onError(err)
        } else {
            onSuccess();
        }
    });
}

function deleteFile(path_file, onSuccess, onError) {
    fs.unlink(path_file, (err) => {
        if (err) {
            onError(err)
        } else {
            onSuccess();
        }
    });
}

function listFileFromDir(directoryPath, onResult) {
    let list = [], file = [], folder = [];
    Promise.all(fs.readdirSync(directoryPath).map(file_folder => {
        const promise = new Promise((resolve, reject) => {
            const stats = fs.statSync(path.join(directoryPath, file_folder));
            resolve({
                isDirectory: stats.isDirectory(),
                name: path.join(directoryPath, file_folder),
            })
        });
        return promise.then(function (result) {
            list.push(result); //ok
        });
    })).then(function () {
        // console.log(list); // debug
        file = list.filter(val => {
            if (!val.isDirectory) {
                return true
            }
            return false
        }).map(val => {
            return val.name
        });
        folder = list.filter(val => {
            if (val.isDirectory) {
                return true
            }
            return false
        }).map(val => {
            return val.name
        });
        // result
        onResult({
            file,
            folder,
        });
    });
}

function mkdirIfNotExist(path_dir) {
    if (!fs.existsSync(path_dir)) {
        fs.mkdirSync(path_dir, {
            recursive: true
        });
    }
}

module.exports = {
    mkdirIfNotExist,
    isFileFolderExist,
    //
    mkdir,
    //
    readFile,
    writeFile,
    deleteFile,
    //
    listFileFromDir,
}