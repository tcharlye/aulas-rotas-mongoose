var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pos-unoesc');

var db= mongoose.connection;

db.on('error', function(err){
	console.log('Erro de conexao.', err);
});
db.on('open', function(){
	console.log('Conexao aberta.');
});
db.on('connected', function(err){
	console.log('Conectado');
});
db.on('disconnected', function(err){
	console.log('Desconectado');
});

var Cat = mongoose.model('Cat', {name: String});
//Cria um Model chamado Cat
//Criará uma coleção chamada cats
//no terceiro parametro podemos passar um nome 

var kitty = new Cat({name: 'Osvaldinho'});

kitty.save(function(err, data){
	if(err){
		console.log('Erro:', err);
	}
	console.log('meow', data);
});