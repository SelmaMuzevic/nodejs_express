// on recharge toujours le serveur dans le terminal avec node app.js 


var express = require('express');
var app = express();


app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});


app.get('/toto', function(req, res) {
    res.send('Yo Toto!');
});

app.use(express.static('public'));