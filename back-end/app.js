//--- Contient application Express de gestion des réponses du serveur aux requêtes ---//

// Import express pour construire API Rest
const express = require("express");
/*
// Import du package de sécurité helmet
const helmet = require('helmet');
*/
// Import middleware Express pour activer CORS avec options
const cors = require("cors");
/*
// Import de morgan (logger http)
const morgan = require('morgan');

// Import module express-rate-limit
const rateLimit = require('express-rate-limit');
*/
// Utilitaire pour travailler avec les chemins de fichiers et de répertoires
const path = require('path');

// Gestion des variables d'environnement
require("dotenv").config();

// Création de l'application Express
const app = express();
/*
// Logger les requests et les responses
app.use(morgan('dev'));

// Sécurisation des en-têtes de réponse http
app.use(helmet());
*/
// Gestion des CORS
var corsOptions = {
    origin: '*',
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
};
app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});
/*
// Middleware de limitation des demandes répétées à l'API ou aux endpoints
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300 // limite de requête par IP pour windowsMs
});
app.use(limiter);
*/

// Analyse les req de type de contenu - application/json
app.use(express.json());

// Analyse les req de type de contenu - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Import de l'objet base de données
const db = require("./app/models");


db.sequelize.sync().then(() => {
    console.log("Re-sync db.");
});


// Gestionnaire de routage
// Configuration du serveur pour renvoyer des fichiers statiques
app.use("/images", express.static(path.join(__dirname, 'images')));



// ROUTES
require("./app/routes/user.routes")(app);
require("./app/routes/restaurant.routes")(app);
require("./app/routes/menu.routes")(app);


// Exportation de l'application
module.exports = app;