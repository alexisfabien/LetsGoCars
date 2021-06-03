// Imports
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;


// Instanciation Serveur
const server = express();

// Body Parser Config
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//Configure routes
server.get('/', (req, res) => {
    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1> Bonjour sur API LestGoCar </h1>');
});

server.use('/api/', apiRouter);

// Launch Server
server.listen(8083, () => {
    console.log('Serveur en écoute');
});
