var mysql = require('mysql');

var conexaoMySQl = function () {
    console.log('Conexão com o BD estabelecida...');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    return conexaoMySQl;
}