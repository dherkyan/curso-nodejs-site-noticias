var conexaoManager = require('../../config/databases');

module.exports = function (app) {

    var conexao = conexaoManager();

    app.get('/noticias', function (req, res) {

        conexao.query('select * from noticias', function(error, result) {
            res.render("noticias/noticias" , {noticias : result});
            //res.send(result);
        });
    });
}