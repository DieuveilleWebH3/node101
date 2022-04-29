
const { Socket } = require("dgram");
const http = require("http");


// ****************************** Low Level  /  Bas Niveau *****************************

// const server = http.createServer();

// server.connections('connection'), (socket) => {
//     console.log("We received a connection");
// };

// server.listen(3009);

// console.log("Server listenning on 3009");


// ****************************** High Level  /  Haut Niveau *****************************

const server = http.createServer( 
    (req, res) =>{
        // console.log("We received a connection");
        console.log(req);
        console.log(res);

        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<h1> Hello World </h1>");
        res.end;
    }
);

server.listen(3009);

console.log("Server listenning on 3009");