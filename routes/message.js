var express = require('express');
var router = express.Router();
const User = require('../models/users');
const Message = require('../models/messages');
const sanitizeUser = require('../utils/sanitzeUser');




router.post('/create', async (req, res, next) => {
    const message = new Message( { content: req.body.content , from: req.user._id});
    req.checkBody('content', 'Can\'t insert empty message').notEmpty().escape();
    const errors = req.validationErrors();
    if (errors) {
        res.status(400).json(errors);
    } else {
        try {
            const createdMessage = await message.save();

            res.json({msg: 'Success'});
        } catch (err) {
            res.status(500).json({msg: err.message || 'Internal error'});
        }
    }
});

module.exports = router;
