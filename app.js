var app = require('./config/express')();
var rotasProdutos = require('./app/route/produtos')(app);

app.listen(3000, function () {
	console.log("servidor rodando");
});

