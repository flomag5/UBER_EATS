//--- Définition de la logique de routing pour la ressource "USER" ---//

module.exports = app => {
    const router = require("express").Router();

    // Import middleware de gestion des fichiers téléchargés
    const multer = require('../middleware/multer-config');

    //Import controllers "user"
    const userCtrl = require("../controllers/user.controller.js");

    // Importation middleware du password
    const password = require("../middleware/password.js");


    // Routes CRUD pour "post" avec middleware d'authentification
    // Enregistrement d'un nouvel utilisateur
    router.post("/signup", password, userCtrl.signup);

    // Connexion d'un utilisateur existant
    router.post("/login", userCtrl.login);

    // Recherche d'un/tous utilisateur(s)
    router.get("/:id", userCtrl.getOneUser);
    router.get('/', userCtrl.getAllUsers);

    // Modification d'un compte utilisateur
    router.put("/:id", multer, userCtrl.updateUser);

    // Suppression d'un compte utilisateur
    router.delete("/:id", userCtrl.delete);


    app.use("/api/user", router);
};
