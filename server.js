// ========================
// get the packages we need
// ========================
var express     = require('express');
var app         = express();

// =======================
// configuration =========
// =======================

var port = process.env.PORT || 8080;

// allow access from our app to the rest of the files in our system.
app.use('/app', express.static(__dirname + '/app'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// serve index.html from '/' route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
