const express = require('express');

const router = express.Router();

const User = require('../models/user.model')
router.get("/",async (req, res) => {
    const users = await User.find({}).lean().exec()

    res.status(404).json({data:users})
    return users;
})



module.exports = router