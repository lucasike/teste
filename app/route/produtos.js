module.exports = function(app){
    app.get('/produtos', function(req, res) {
        var pg = require('pg');
        // var connection = postgres.createConnection({
        //     host : '192.168.1.230',
        //     port : '5432',
        //     user : 'paxpro',
        //     password : '123',
        //     database : 'paxprodev'
        // });
        var config = {
            host: '192.168.1.230',
            user: 'paxpro', //env var: PGUSER
            database: 'paxprodev', //env var: PGDATABASE
            password: '123', //env var: PGPASSWORD
            port: 5432, //env var: PGPORT
            max: 10, // max number of clients in the pool
            idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
        };
        var client = new pg.Client(config);

        client.connect(function(err) {
            if(err) {
                return console.error('could not connect to postgres', err);
            }
            client.query('select * from country', function(err, result){
                res.send(result);
                client.end();
            });
        });      
    });
}