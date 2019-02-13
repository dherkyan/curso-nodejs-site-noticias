module.exports.index = function(app, req, res){
    var conexao = app.config.databases();
    var noticiaDao = new app.app.models.NoticiaDao(conexao);

    noticiaDao.listarCincoUltimasNoticias(function (error, result) {
        res.render("home/index", {noticias : result});
    });
}