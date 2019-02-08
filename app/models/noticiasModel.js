function Noticias(conexao){
    this._conexao = conexao;
}

Noticias.prototype.getNoticias = function(conexao, callback){
    this._conexao.query('SELECT * FROM NOTICIAS',callback);
}

Noticias.prototype.getNoticia = function(conexao, callback){
    this._conexao.query('SELECT * FROM NOTICIAS WHERE ID_NOTICIAS = 2',callback);
}

Noticias.prototype.salvarNoticia = function(noticia, conexao, callback){
    this._conexao.query('INSERT INTO NOTICIAS SET ?', noticia, callback);
}

module.exports = function(){
    return Noticias;
}