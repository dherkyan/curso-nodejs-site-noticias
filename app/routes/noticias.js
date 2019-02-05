module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        var mysql = require('mysql');

        var conexao = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'portal_noticias'
        });

        conexao.query('select * from noticias', function (error, result) {
            res.send(result);
        });

        //res.render("noticias/noticias");
    });
}