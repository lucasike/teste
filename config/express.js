var express = require('express');
var load = require('express-load');

var Dir = {};

module.exports = function () {
	
	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	load('routes', {cwd: 'app'})
		.then('infra')
		.into(app);

	return app;
}

// Dir.init = function () {
// 	var app = express();

// 	app.set('view engine', 'ejs');
// 	app.set('views', './app/views');

// 	load('routes', {cwd: 'app'})
// 		.then('infra')
// 		.into(app);

// 	return app;
// }

// module.exports = Dir;