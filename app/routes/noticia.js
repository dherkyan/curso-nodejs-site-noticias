module.exports = function (app) {

    app.get('/noticia', function (req, res) {
        
        var conexao = app.config.databases();
        var noticiaDao = new app.app.models.NoticiaDao(conexao);

        noticiaDao.getNoticia(function(error, result) {
            res.render("noticias/noticia" , {noticia : result});
            //res.send(result);
        });

    });
    
}