const http = require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/plain"});
    res.end("Hello!");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=> console.log("Server is running on port 3000"));