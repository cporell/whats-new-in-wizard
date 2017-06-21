var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function(){
	console.log('Hello world');
	console.log('App is running and listening on port ' + port);
});

app.use(express.static(path.join(__dirname, '/public')));
