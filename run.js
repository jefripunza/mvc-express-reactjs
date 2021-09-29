// ========================== LIBRARY =========================
const child_process = require('child_process'),
    fs = require("fs"),
    fse = require('fs-extra'),
    path = require("path"),
    JSSoup = require('jssoup').default,
    minify = require('html-minifier').minify;

const print = require("./utils/print");
const { clear } = require("./utils/system");
const { writeFile } = require("./utils/fs")
const { replaceAll } = require("./helper/data")

// =========================== DEFINE ==========================
const path_frontend = path.join(__dirname, "frontend"),
    path_build = path.join(path_frontend, "build");
//
const path_public = path.join(__dirname, "public"),
    path_views = path.join(__dirname, "views")
const path_html = path.join(path_public, "index.html"),
    path_ejs = path.join(path_views, "index.ejs")

// ========================== FUNCTION =========================
function closeApp() {
    setTimeout(() => {
        print("happy hacking!", "success");
        process.exit()
    }, 200);
}
const resetPublicFolder = function (directoryPath, onSuccess = false) {
    if (fs.existsSync(directoryPath)) {
        fs.readdirSync(directoryPath).forEach((file, index) => {
            const curPath = path.join(directoryPath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                // recurse
                resetPublicFolder(curPath);
            } else {
                // delete file
                fs.unlinkSync(curPath);
            }
        });
        try {
            fs.rmdirSync(directoryPath);
        } catch (error) {
            // console.log(error);
        }
        if (onSuccess) {
            setTimeout(() => {
                fs.mkdir(path_public, { recursive: true }, () => {
                    onSuccess()
                })
            }, 1000);
        }
    }
};
function newTerminal(cmd) {
    child_process.exec(`start cmd.exe /K "${cmd}" `);
}
function execute(cmd, onFinish, dirname = __dirname) {
    child_process.exec(cmd, {
        cwd: dirname,
    }, (error, stdout, stderr) => {
        if (error) {
            print(`exec error: ${error}`, "error");
        } else {
            onFinish()
        }
    }).stdout.pipe(process.stdout);
}

// ============================ MAIN ===========================
clear(); // space CLI
const mode = process.argv[2];
if (mode) {
    if (mode === "install") {
        print("Starting installation....", "title");
        const cmd = `yarn install && cd frontend && yarn install`;
        print("cmd : " + cmd, "notice");
        execute(cmd, () => {
            print("installation success!", "success");
            closeApp();
        });

    } else if (mode === "dev") {
        newTerminal("SET NODE_ENV=development && nodemon");
        closeApp();
    } else if (mode === "reactjs") {
        newTerminal("cd frontend && yarn start");
        closeApp();
    } else if (mode === "start") { // combine
        newTerminal("SET NODE_ENV=development && nodemon");
        newTerminal("cd frontend && yarn start");
        closeApp();

    } else if (mode === "template") {
        newTerminal("cd system && nodemon template.js");
        closeApp();
    } else if (mode === "ngrok") {
        newTerminal("ngrok.exe http 5000");
        closeApp();

    } else if (mode === "build") {
        print("Starting compile....", "title");
        print("target : " + path_frontend, "notice");
        execute(`cd frontend && yarn build`, () => {
            print("finish building react.js!", "success");
            setTimeout(() => {
                print("public status?", "title");
                setTimeout(() => {
                    resetPublicFolder(path_public, () => {
                        print("reset folder public!", "success");
                        fse.copy(path_build, path_public, function (err) {
                            if (err) {
                                console.error(err);
                            } else {
                                print("copy all data from build to public!", "success");
                                // process index.html to index.ejs
                                setTimeout(() => {
                                    const html_value = replaceAll(fs.readFileSync(path_html, { encoding: "utf-8" }), "http://localhost:5000", "")
                                    var soup = new JSSoup(html_value);
                                    //
                                    // change title
                                    soup.find('title').string.replaceWith('<%= title %>')
                                    // console.log("title", soup.find('title').text); // test
                                    //
                                    // change description content
                                    const meta = soup.findAll('meta');
                                    let selector_meta_i = 0;
                                    for (let i = 0; i < meta.length; i++) {
                                        if (meta[i].attrs.name === "description") {
                                            selector_meta_i = i;
                                        }
                                    }
                                    soup.findAll('meta')[selector_meta_i].attrs.content = "<%= description %>"
                                    // console.log("description", soup.findAll('meta')[selector_meta_i].attrs.content); // test
                                    let result = "<!DOCTYPE html>" + soup.prettify().split("\n").filter((v, i) => {
                                        return i > 1 ? true : false
                                    }).join("\n");
                                    //
                                    // minify
                                    result = minify(result, {
                                        collapseBooleanAttributes: true,
                                        collapseWhitespace: true,
                                        decodeEntities: true,
                                        removeAttributeQuotes: true,
                                        removeComments: true,
                                        // removeEmptyAttributes: true,
                                        // removeEmptyElements: true,
                                        removeOptionalTags: true,
                                        removeRedundantAttributes: true,
                                        removeScriptTypeAttributes: true,
                                        removeStyleLinkTypeAttributes: true,
                                        removeTagWhitespace: true,
                                    });
                                    //
                                    print("index.html minify and set ejs format!", "success");
                                    setTimeout(() => {
                                        writeFile(path_ejs, result, () => {
                                            print("write index.html FIX to index.ejs!", "success");
                                            // delete index.html
                                            fs.rm(path_html, () => {
                                                print("delete index.html from public!", "success");
                                                closeApp();
                                            })
                                        })
                                    }, 1000);
                                }, 1000);
                            }
                        });
                    });
                }, 1000);
            }, 2000);
        });
    } else if (mode === "push-github") {
        const commit_message = process.argv[3];
        if (commit_message) {
            execute(`git add . && git commit -m "${commit_message}" && git push -u origin main --force`, () => {
                print("repository now is update!", "success");
                closeApp();
            })
        }else{
            print("commit message?", "error");
            closeApp();
        }
    } else if (mode === "test") {
        closeApp();

    } else {
        print("mode not found!", "warning")
    }
} else {
    print("mode require!", "warning")
}