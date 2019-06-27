
const messageHandler = require('./messages');
module.exports = {

    newMessage: async ({messages, room},socket) => {
        console.log(room);
        if (!room || !messages.length)
            socket.emit('err', {error: 'Invalid parameters.' });
        else
            messageHandler.newMessage({message: messages[0]}, socket);
    }
};