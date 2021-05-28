// Imports
const express = require('express');

// Instanciation Serveur
const server = express();

//Configure routes
server.get('/', (req, res) => {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1> Bonjour sur API LestGoCar </h1>');
});

// Launch Server
server.listen(8083, () => {
    console.log('Serveur en écoute');
});
