var conexaoManager = require('../../config/databases');

module.exports = function (app) {

    app.get('/noticias', function (req, res) {
        
        var conexao = app.config.databases();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticias(conexao, function(error, result) {
            res.render("noticias/noticias" , {noticias : result});
            //res.send(result);
        });
        
    });

}