var express = require('express');
var path = require('path');

var app = express();

// DON'T forget this line to serve the assets
app.use('/public', express.static(__dirname + '/public'));
app.use('/src', express.static(__dirname + '/src'));
//set view path
app.set('views', path.join(__dirname, 'views'));

// set ejs for templating
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(8002);