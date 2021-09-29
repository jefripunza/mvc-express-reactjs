// ================================================================================================================
const fs = require("fs");
const path = require("path");

// ================================================================================================================
const geoip = require('geoip-lite');

// ================================================================================================================
const print = require("../utils/print")
const {
    Database,
    DataKey,
} = require("../models/advance-json-database");
const { readFile, writeFile, isFileFolderExist, listFileFromDir } = require("../utils/fs");

// ================================================================================================================
let online = {};
const database = {};
const datakey = [];
let maintenance = false;

// ================================================================================================================
const path_system_json = path.join(__dirname, "..", "system", "system.json");
const default_system_json = {
    maintenance: false,
}
if (!isFileFolderExist(path_system_json)) {
    writeFile(path_system_json, JSON.stringify(default_system_json), () => {
        print("created system.json", "success")
    }, error => {
        console.log(error);
    })
}
setInterval(() => {
    let system_json = JSON.parse(readFile(path_system_json));
    if (maintenance !== system_json.maintenance) {
        io.emit("maintenance", system_json.maintenance);
        maintenance = system_json.maintenance;
    }
}, 500);

// create folder if not exist
const path_chat = path.join(__dirname, "..", "models", "database", "chat");
const path_info_chat = path.join(__dirname, "..", "models", "database", "info_chat");
if (!fs.existsSync(path_chat)) {
    fs.mkdirSync(path_chat, {
        recursive: true
    });
}
if (!fs.existsSync(path_info_chat)) {
    fs.mkdirSync(path_info_chat, {
        recursive: true
    });
}

module.exports = (server, app) => {
    const io = require("./io")(server);

    // init awal database
    listFileFromDir(path_chat, result => {
        if (result.file.length > 0) {
            result.file.forEach(item => {
                const email = item.replace(/^.*[\\\/]/, '').split(".")[0];
                //
                // add database chat
                const file_chat = path.join(path_chat, email + ".json");
                database[email] = new Database(file_chat, []);
                //
                // add info chat
                const file_info_chat = path.join(path_info_chat, email + ".json");
                datakey[email] = new DataKey(file_info_chat)
            });
        }
    })

    // active interval
    setInterval(() => {
        listFileFromDir(path_chat,
            result => {
                if (result.file.length > 0) {
                    io.emit("admin:client_available",
                        result.file
                            .map(item => {
                                const email = item.replace(/^.*[\\\/]/, '').split(".")[0];
                                const file_info_chat = path.join(path_info_chat, email + ".json");
                                const client = JSON.parse(readFile(file_info_chat));
                                client.online = Object.values(online).some(v => {
                                    return email === v.email
                                });
                                return client;
                            })
                    );
                }
            }
        )
    }, 1000);

    io.on('connection', function (socket) {
        // welcome new client
        const ip_forwarded = socket.handshake.headers['x-forwarded-for'] || socket.conn.remoteAddress.split(":")[3];
        const socket_id = socket.id;

        socket.on('disconnect', function () {
            console.log('Got disconnect!');
            // var i = online.findIndex(v => uuid === v.uuid);
            // online.splice(i, 1);
            delete online[socket_id];
            // console.log("online:disconnect", online);
        });

        socket.on("chat:logout", email => {
            delete online[socket_id];
            // console.log("online:logout", online);
        })

        // introduction
        socket.emit('welcome', {
            socket_id, // create new client uuid
            ip: ip_forwarded,
            geo: geoip.lookup(ip_forwarded),
            maintenance,
        });
        socket.on("thanks", client => {
            const {
                uuid,
            } = client;

            // console.log({
            //     socket_id,
            //     client,
            //     online,
            // });

            socket.on("chat:add_user", get => {
                const email = get.email;
                //
                const file_email = email.split("@")[0]

                // add to online
                online[socket_id] = {
                    uuid,
                    name: get.nama,
                    fullname: get.nama_panjang,
                    email: file_email,
                }
                // console.log("online:add_user", online);

                // add database chat
                const path_chat = path.join(__dirname, "..", "models", "database", "chat", file_email + ".json");
                database[file_email] = new Database(path_chat, []);
                //
                // add info chat
                const path_info_chat = path.join(__dirname, "..", "models", "database", "info_chat", file_email + ".json");
                datakey[file_email] = new DataKey(path_info_chat, {
                    uuid,
                    email,
                    nama: get.nama,
                    nama_panjang: get.nama_panjang,
                    foto: get.foto,
                })
                const last_message = database[file_email].read();
                const send = {
                    uuid,
                    last_message,
                }
                // console.log(send);
                io.sockets.emit('chat:last_message', send);
            })

            // admin chat
            socket.on("admin:get_message", email => {
                socket.emit("admin:client_message", database[email].read())
            })

            // live chat
            socket.on("chat:message", message => {
                database[message.from].add(message, () => {
                    io.sockets.emit('chat:message', message);
                });
            })
            socket.on("chat:typing", typing => {
                io.sockets.emit('chat:typing', message);
            })
        })
    });
    app.use(function (req, res, next) {
        req.io = io;
        next();
    });
}