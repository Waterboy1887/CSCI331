const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1>");
    response.write("<h2>Connor Carlson - j79k878</h2>");
    response.write("<p>Running node server on port 3016</p>")
    response.end();
}).listen(3016);
