module.exports = function (app) {

    app.get('/noticias', function (req, res) {
        
        var conexao = app.config.databases();
        var noticiaDao = new app.app.models.NoticiaDao(conexao);

        noticiaDao.getNoticias(function(error, result) {
            res.render("noticias/noticias" , {noticias : result});
            //res.send(result);
        });

    });

}