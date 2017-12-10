

var express = require('express');
var app = express();

app.use('/js', express.static('/src/express' + '/js'));
app.use('/bower_components', express.static('./node_modules/bower/bin/bower'));
app.use('/css', express.static(__dirname + './src/css'));
app.use('/modules', express.static(__dirname + './src/modules'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: './src/index.html' });




/*var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});*/