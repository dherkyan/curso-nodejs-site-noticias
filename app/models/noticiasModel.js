module.exports = function(){
    
    this.getNoticias = function(conexao, callback){
        conexao.query('SELECT * FROM NOTICIAS',callback);
    }

    this.getNoticia = function(conexao, callback){
        conexao.query('SELECT * FROM NOTICIAS WHERE ID_NOTICIAS = 2',callback);
    }
    
    return this;
}