
const http = require('http');

const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body "Hello world, This is my Node.js server"
    res.end('Hello world, This is my Node.js server\n');
});

// Listen on port 10000 or a free port beyond 10000
const PORT = 10000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});








