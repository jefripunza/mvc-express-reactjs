import { io } from "socket.io-client";

import { production, config } from "../../config";

// Socket.io init
const url_server = production ? "/" : config.url_server_development;
const socket = io.connect(url_server, { reconnect: true, transports: ["websocket"] })
socket.on("connect_error", (error) => {
    // revert to classic upgrade
    socket.io.opts.transports = ["polling", "websocket"];
});

export default socket;