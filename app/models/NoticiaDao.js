function NoticiaDao(conexao){
    this._conexao = conexao;
}

NoticiaDao.prototype.getNoticias = function(conexao, callback){
    this._conexao.query('SELECT * FROM NOTICIAS',callback);
}

NoticiaDao.prototype.getNoticia = function(conexao, callback){
    this._conexao.query('SELECT * FROM NOTICIAS WHERE ID_NOTICIAS = 2',callback);
}

NoticiaDao.prototype.salvarNoticia = function(noticia, conexao, callback){
    this._conexao.query('INSERT INTO NOTICIAS SET ?', noticia, callback);
}

module.exports = function(){
    return NoticiaDao;
}