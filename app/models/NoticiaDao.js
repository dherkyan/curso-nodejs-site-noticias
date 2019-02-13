function NoticiaDao(conexao){
    this._conexao = conexao;
}

NoticiaDao.prototype.getNoticias = function(callback){
    this._conexao.query('SELECT * FROM NOTICIAS',callback);
}

NoticiaDao.prototype.getNoticia = function(param, callback){
    this._conexao.query('SELECT * FROM NOTICIAS WHERE ID_NOTICIAS = '+param.id,callback);
}

NoticiaDao.prototype.salvarNoticia = function(noticia, callback){
    this._conexao.query('INSERT INTO NOTICIAS SET ?', noticia, callback);
}

NoticiaDao.prototype.listarCincoUltimasNoticias = function(callback){
    this._conexao.query('SELECT * FROM NOTICIAS ORDER BY DATA_CRIACAO DESC LIMIT 5', callback);
}

module.exports = function(){
    return NoticiaDao;
}