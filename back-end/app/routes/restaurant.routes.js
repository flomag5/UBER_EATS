//--- Définition de la logique de routing pour la ressource "RESTAURANT" ---//


module.exports = app => {
    // Import controllers "restaurant"
    const restaurants = require("../controllers/restaurant.controller.js");

    const menus = require("../controllers/menu.controller.js");

    const likesCtrl = require('../controllers/like.controller.js');

    // Création du routeur
    const router = require("express").Router();

    // Import du middleware de gestion des fichiers téléchargés
    const multer = require('../middleware/multer-config');

    // Routes CRUD pour "post" avec middleware d'authentification
    router.post("/", multer, restaurants.createRestaurant);

    router.get("/", restaurants.findAll);

    router.get("/:id", restaurants.findRestaurantById);

    router.put("/:id", multer, restaurants.updateRestaurant);

    router.delete("/:id", restaurants.deleteRestaurant);


    // Route Menu
    router.post('/:id/menu', menus.createMenu);

    // Route de like/unlike
    router.get('/:restauId/likes', likesCtrl.getLikes);
    router.post('/:id/like', likesCtrl.likeItem);
    router.delete('/:restauId/unlike', likesCtrl.unlikeItem);


    app.use('/api/restaurants', router);
};