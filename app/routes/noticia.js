var conexaoManager = require('../../config/databases');

module.exports = function (app) {

    app.get('/noticia', function (req, res) {
        
        var conexao = app.config.databases();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(conexao , function(error, result) {
            res.render("noticias/noticia" , {noticia : result});
            //res.send(result);
        });
        
    });
    
}