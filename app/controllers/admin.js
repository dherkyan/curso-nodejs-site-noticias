module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia", { validacao: {}, noticia:{} });
}

module.exports.salvar_noticia = function(app, req, res){
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('texto', 'Texto da notícia é obrigatório').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('admin/form_add_noticia', { validacao : errors, noticia: noticia});
        return;
    }

    var conexao = app.config.databases();
    var noticiaDao = new app.app.models.NoticiaDao(conexao);

    noticiaDao.salvarNoticia(noticia, function (error, result) {
        res.redirect("/noticias");
        //res.send(result);
    });
}