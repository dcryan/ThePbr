var gzippo = require('gzippo');
var express = require('express');
var app = express();

app.use(express.logger('dev'));
app.use(gzippo.staticgzip("" + __dirname + "/dist"));
app.listen(process.env.port || 5000);