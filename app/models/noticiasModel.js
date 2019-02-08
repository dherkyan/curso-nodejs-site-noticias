function Noticias(){

}

Noticias.prototype.getNoticias = function(conexao, callback){
    conexao.query('SELECT * FROM NOTICIAS',callback);
}

Noticias.prototype.getNoticia = function(conexao, callback){
    conexao.query('SELECT * FROM NOTICIAS WHERE ID_NOTICIAS = 2',callback);
}

Noticias.prototype.salvarNoticia = function(noticia, conexao, callback){
    conexao.query('INSERT INTO NOTICIAS SET ?', noticia, callback);
}

module.exports = function(){
    return Noticias;
}