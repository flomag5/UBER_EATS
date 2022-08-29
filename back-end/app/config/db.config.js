//--- Fichier configuration accès à la database ---//

// Gestion des variables d'environnement
require("dotenv").config()

// Paramètres de connection MySQL
module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DBNAME,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};