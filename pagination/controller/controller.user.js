const express = require('express');

const sendmail = require("../utils/sendmail")
const router = express.Router();

const User = require('../models/user.model')
router.post("/",async (req, res) => {
    try{
    const users = await User.create(req.body)
    sendmail("a@a.gmail.com",`${req.body.mail}`,`Welcome to Swathi company${req.body.firstname}`,
    `${req.body.firstname} please confirm your email address`)



    res.status(404).json({data:users})
    return users;
    }
    catch(err){
        return res.status(404).json({status:"failed"})
    }
});

router.get("/",async(req, res)=>{
    try{
        const page = +req.query.page || 1;
        const size = req.query.size || 2;

        const skip = (page-1)*size;

        const totalPages = Math.ceil((await User.find().countDocuments())/size);

        const users = await User.find().skip(skip).limit(size).lean().exec();

        return res.json({users,totalPages});
    }
        catch(err){
            return res.status(404).json({status:"failed"})
        }
  
})



module.exports = router