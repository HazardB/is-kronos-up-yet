var express = require('express');
var compression = require('compression');

var app = express();

app.use(compression());

app.use(express.static(__dirname + '/public'));


var port = process.env.PORT || 3000;
app.listen(port);

console.log('Express front-end server running on port: ' + port);
