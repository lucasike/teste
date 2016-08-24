var app = require('./config/express')();

app.listen(9000, function () {
	console.log("servidor rodando");
});

