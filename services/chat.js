const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const chat = require('./chatHandler');


module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Socket connected');
        socket.on('new_message', (data) => chat.newMessage(data,socket));
        socket.on('disconnect', (event) => {
            console.log('Disconnected',event);
        });
    });
}

