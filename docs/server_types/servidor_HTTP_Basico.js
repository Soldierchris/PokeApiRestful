const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola, mundo!');
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

//touch Este tipo de servidor es adecuado para aplicaciones simples, como APIs básicas o aplicaciones web estáticas.