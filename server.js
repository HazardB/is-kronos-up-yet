var express = require('express');
var compression = require('compression');

var app = express();

app.use(compression());

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);

console.log('running');
