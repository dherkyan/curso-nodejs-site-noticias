var conexaoManager = require('../../config/databases');

module.exports = function (app) {

    app.get('/noticia', function (req, res) {
        
        var conexao = app.config.databases();

        conexao.query('select * from noticias where id_noticias = 2', function(error, result) {
            res.render("noticias/noticia" , {noticia : result});
            //res.send(result);
        });
    });

}