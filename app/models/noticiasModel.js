module.exports = function(){
    
    this.getNoticias = function(conexao, callback){
        conexao.query('SELECT * FROM NOTICIAS',callback);
    }

    this.getNoticia = function(conexao, callback){
        conexao.query('SELECT * FROM NOTICIAS WHERE ID_NOTICIAS = 2',callback);
    }

    this.salvarNoticia = function(noticia, conexao, callback){
        conexao.query('INSERT INTO NOTICIAS SET ?', noticia, callback);
    }
    
    return this;
}