
// provide connection / http module
const http = require('http')

// create server for module 

const server = http.createServer((req, res) => {
    res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello world');
});

// provide port for run the server 

const PORT = 3000;

// start the server using Port Number / define host 
server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
});
