const http = require("node:http");
const server = http.createServer(function(req,res){
    if(req.url === "/getdata"){
        res.end('YOU CANT CHEAT ME OKAY');
    }
    res.end("Hello there");

});

server.listen(8086);