const http = require('http');
const PORT = process.env.PORT || 8080

const server = http.createServer((req, res) => {
  if (req.url === '/cors') {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.setHeader('Access-Control-Allow-Methods', 'GET');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // if (req.method === 'OPTIONS') {
    //   res.writeHead(204);
    //   res.end();
    //   return;
    // }

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, CORS!' }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
});
