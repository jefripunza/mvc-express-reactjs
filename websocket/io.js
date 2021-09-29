const socketIO = require("socket.io");

module.exports = (server) => {
    return socketIO(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            transports: ['websocket', 'polling'],
            credentials: true
        },
        allowEIO3: true
    });
}