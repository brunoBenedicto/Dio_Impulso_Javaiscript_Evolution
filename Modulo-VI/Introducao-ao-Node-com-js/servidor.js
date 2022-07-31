const http = require('http');
const host = 'http://localhost';
const port = 3001;
const stats = require('./pcRunUsage.js');

http.createServer((req, res)=>{
    let url = req.url;
    if(url === '/stats'){
        res.end(JSON.stringify(stats, null, 2))
    } else {
        res.end('<h1> olá</h1>')
    }
}).listen(port, ()=>console.log(`servido rodando em ${host}:${port}`));