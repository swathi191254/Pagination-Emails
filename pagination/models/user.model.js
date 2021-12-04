const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname:{type: 'string', required: true},
    lastname:{type: 'string', required: true},
    email:{type: 'string', required: true},
 }, { 
        versionKey:false,timestamps:true
    }
)
const User = mongoose.model("user",userSchema)
module.exports = User;