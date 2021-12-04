const express = require("express");

const app = express();

const connect = require("./config/db");



const userController = require("./controller/controller.user")
app.use("/users",userController);
const start = async ()=>{
    await connect();

    app.listen(8080,()=>{
        console.log("listening on port 8080");
    });
}
module.exports = start;