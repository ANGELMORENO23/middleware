const fs = require("fs");
const path = require("path");


const userlog = {
    log: (req,res)=>{
    res.render("login")
    }
}
module.exports = userlog