//--- Définition de la logique de routing pour la ressource "POST" ---//


module.exports = app => {
    const menus = require("../controllers/menu.controller.js");

    // Création du routeur
    const router = require("express").Router();



    // Routes CRUD pour "menu"

    router.get("/:restaurantId/all", menus.getAllMenus);

    router.get("/:id", menus.getOneMenu);

    router.put("/:id", menus.modifyMenu);

    router.delete("/:id", menus.deleteMenu);




    app.use('/api/menu', router);
};