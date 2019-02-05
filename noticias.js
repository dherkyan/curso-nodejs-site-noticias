console.log("Iniciando Portal de Notícias");

var http = require('http');

var server = http.createServer(function(req,res){
    res.end("<html><body>Portal de Notícias</body></html>");
});

server.listen(3000);