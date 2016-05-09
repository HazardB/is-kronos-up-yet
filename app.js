var express = require('express');
var compression = require('compression');

var app = express();

app.use(compression());
app.listen(process.env.PORT || 80);

// TODO: add debug config to change this to 3000
