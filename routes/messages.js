var express = require('express');
var router = express.Router();
const User = require('../models/users');
const Message = require('../models/messages');
const sanitizeUser = require('../utils/sanitzeUser');




router.get('/all', async (req, res, next) => {

    try{
        const messages = await Message.find().sort({createdAt: 'desc'})
            .populate({path: 'user', select: '_id username'}) // populate our reference with user object
        //send page to client
        res.status(200).json({messages});
    }catch (err){
        res.json(err);
    }
});

module.exports = router;
