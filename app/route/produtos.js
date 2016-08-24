module.exports = function(app){
    app.get('/produtos', function(req, res) {

        var client = app.infra.connectionFactory();

        var produtosBanco = app.infra.produtosBanco();

        client.connect(function(err) {
            if(err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('select * from country', function(err, result){
                res.send(result);
                // res.render('produtos/lista',{lista:result});
                client.end();
            });
            
        });      
    });
}