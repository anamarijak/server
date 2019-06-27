
const messageHandler = require('./messages');
module.exports = {

    newMessage: async ({messages},socket) => {
        console.log(messages);
        if (!messages.length)
            socket.emit('err', {error: 'Invalid parameters.' });
        else
            messageHandler.newMessage({message: messages[0]}, socket);
    }
};