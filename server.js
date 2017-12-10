var http = require('http'),
    fs = require('fs');


fs.readFile('./src/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT || 8000);
});

var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});