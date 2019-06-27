const Message = require('../models/messages');

module.exports = {
    newMessage: async({message}, socket) => {
        console.log(message);
        try{
            let newMessage = await new Message({
                content: message.text,
                from: message.user._id,
            }).save();

            socket.emit('newMessage',message);
        } catch (e) {
            console.log(e);
        }
    }
};