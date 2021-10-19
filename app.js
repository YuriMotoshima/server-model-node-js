const express = require('express')
const nunjucks = require("nunjucks")
const routes = require('./routes')
const server = express()

server.get("/", function(req, res){
    return res.send("Hello!")
})

server.listen(5000, function(){
    console.log("Server is running")
} )