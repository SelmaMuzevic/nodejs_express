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

// static file avec express, on essaie de recuperer fichier html dans le dossier /public 
// avec image qu'on a choisi
app.use(express.static('public'));

// function pour afficher l'erreur 404 (404.html) la page pas trouvée
// gerer l'erreur 404
app.use(function(req, res) {
    res.status(404);
    // dirname ça defini le chemin absolue vers le dossier courant avec Node.js
    // sendFile: C'est le node. js qui travail avec le disque dur
    res.sendFile(__dirname + '/public/404.html');
});

// gerer l'erreur 500