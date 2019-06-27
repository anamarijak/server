const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const chat = require('./chatHandler');


module.exports = (io) => {
    io.on("connection", socket => {
        console.log("a user connected :D");
        socket.on("chat message", msg => {
            console.log(msg);
            io.emit("chat message", msg);
        });
        socket.on('new_message', (data) => chat.newMessage(data, socket));
    });
}

