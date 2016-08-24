var pg = require('pg');

function createDBconnection() {
	var config = {
		host: '192.168.56.2',
		user: 'teste', //env var: PGUSER
		database: 'cidades', //env var: PGDATABASE
		password: '123', //env var: PGPASSWORD
		port: 5432, //env var: PGPORT
		max: 10, // max number of clients in the pool
		idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
	};
	var connectionFactory = new pg.Client(config);
}

module.exports = function(){

	return createDBconnection;

}