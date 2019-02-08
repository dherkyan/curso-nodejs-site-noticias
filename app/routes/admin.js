module.exports = function(app){
    app.get('/formulario_inclusao_noticia',function(req, res){
        res.render("admin/form_add_noticia");
    });


    app.post('/noticias/salvar',function(req, res){
        var noticia = req.body;

        var conexao = app.config.databases();
        var noticiaDao = new app.app.models.NoticiaDao(conexao);

        noticiaDao.salvarNoticia(noticia, conexao, function(error, result) {
            res.redirect("/noticias");
            //res.send(result);
        });

    });
}
