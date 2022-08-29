//--- SERVER ---//
/* Serveur pour écouter les requêtes frontend et servir une réponse en retour */


// Import package http comme outils pour créer server
const http = require('http');

// Import de l'application express
const app = require('./app');


// Retourne un port valide qu'il soit sous forme de numéro ou chaîne de caractères
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || '3000');
// Réglage du port d'écoute des requêtes par l'application
app.set('port', port);

// Recherche et support des erreurs de manière appropriée
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// Création du server
const server = http.createServer(app);
// Ecouteur d'évènements, port sur lequel le serveur s'exécute
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    console.log('Listening on ' + bind);
});
// Ecoute et attente des requêtes envoyées
server.listen(port);