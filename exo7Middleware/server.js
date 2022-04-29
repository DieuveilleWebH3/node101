const http = require('http');

const server = http.createServer((req, res) => {
    let start_time = new Date();

    try {
        // ICI MIDDLEWARE A EXECUTER AVANT DE TRAITER LA REQUETE.
        console.log(req.httpVersion, req.url, req.method);
        // FIN MIDDLEWARE
        if (req.url === "/") 
        {
            res.writeHead(200, {'content-type':'text/html'});
            res.write('<h1>HOMEPAGE</h1>');
        } 
        else 
        {
            res.writeHead(404, {'content-type':'text/html'});
            res.write('<h1>404 Not Found</h1>');
        }
    } 
    catch (err) 
    {
        res.writeHead(500, {'content-type':'text/html'});
        res.write('<h1>500 Internal Server Error</h1>');
    }
    
    let finish_time = new Date();
    let difference = new Date();
    difference.setTime(finish_time.getTime() - start_time.getTime());
    
    console.log("\n");
    console.log("execution time");
    console.log(difference.getMilliseconds());

    res.end();

} );

server.listen(3000);
console.log('Server écoute sur le port 3000');
