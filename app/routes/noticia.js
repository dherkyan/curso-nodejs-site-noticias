module.exports = function (app) {

    app.get('/noticia', function (req, res) {
        
        var conexao = app.config.databases();
        var noticiasModel = new app.app.models.noticiasModel(conexao);

        noticiasModel.getNoticia(conexao , function(error, result) {
            res.render("noticias/noticia" , {noticia : result});
            //res.send(result);
        });

    });
    
}