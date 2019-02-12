module.exports.noticia = function (app, req, res) {
    var conexao = app.config.databases();
    var noticiaDao = new app.app.models.NoticiaDao(conexao);

    noticiaDao.getNoticia(function (error, result) {
        res.render("noticias/noticia", { noticia: result });
        //res.send(result);
    });
}

module.exports.noticias = function (app, req, res) {
    var conexao = app.config.databases();
    var noticiaDao = new app.app.models.NoticiaDao(conexao);

    noticiaDao.getNoticias(function (error, result) {
        res.render("noticias/noticias", { noticias: result });
        //res.send(result);
    });

}