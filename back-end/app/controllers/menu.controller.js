//--- Définition logique métier pour la ressource "menu" ---//

// Importation

const { menu } = require("../models");
const db = require("../models");
const Menu = db.menu;
const Op = db.Sequelize.Op;
const fs = require("fs");
const jwt = require('jsonwebtoken');


// CRUD Menu

// Create and Save a new Menu
exports.createMenu = (req, res, next) => {
    const RestoId = req.params.id;
    if (req.file) {
        Menu.create({
            title: req.body.title,
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            description: req.body.description,
            price: req.body.price,
            restaurantId: RestoId

        })
            .then(() => res.status(201).json({ message: 'Menu créé !' }))
            .catch(error => res.status(400).json({ error }));
    } else {
        Menu.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            restaurantId: RestoId
        })
            .then(() => res.status(201).json({ message: 'Menu créé !' }))
            .catch(error => res.status(400).json({ error }));
    }

};


// Find all Restaurants from the database.
exports.getAllMenus = (req, res, next) => {

    Menu.findAll({
        include: [
            "restaurant"
        ]
    })
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
};

// Find one Menu with ID
exports.getOneMenu = (req, res, next) => {

    Menu.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            "restaurant"
        ]
    })
        .then(menu => res.status(200).json(menu))
        .catch(error => console.log(error))

};


// Update a Menu by the id in the request
exports.modifyMenu = (req, res, next) => {
    const id = req.params.id;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY_TOKEN);
    const isAdmin = decodedToken.isAdmin

    Menu.findOne({ where: { id: id } })
        .then(menu => {
            if (isAdmin === true) {
                const updateMenu = {
                    title: req.body.title,
                    description: req.body.description,
                    price: req.body.price,
                    restaurantId: RestoId
                }
                if (req.file) {
                    updateMenu.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
                    const filename = menu.image.split('/images/')[1];
                    fs.unlinkSync(`images/${filename}`)
                    console.log(menu.image);
                }

                Menu.update(updateMenu, { where: { id: id } })
                    .then(() => res.status(200).json({ message: 'Menu modifié !' }))
                    .catch(error => res.status(400).json({ error }))
            } else {
                return res.status(403).json({ 'error': 'UnAuthorize' });
            }
        })
        .catch((error) => res.status(500).json({ message: 'Database Error', error: error }));
};


// Delete a Menu
exports.deleteMenu = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY_TOKEN);
    const isAdmin = decodedToken.isAdmin

    Menu.findOne({
        where: { id: req.params.id }
    })
        .then(menu => {
            if (isAdmin === true) {
                if (menu.image != null) {
                    const filename = menu.image.split('/images/')[1];
                    fs.unlink(`images/${filename}`, () => {
                        Menu.destroy({ where: { id: req.params.id } })
                            .then(() => res.status(200).json({ message: 'Menu supprimé !' }))
                            .catch(error => res.status(400).json({ error }))
                    })
                } else {
                    Menu.destroy({
                        where: { id: req.params.id }
                    })
                        .then(() => res.status(200).json({
                            message: 'Menu supprimé de la BDD !'
                        }))
                        .catch(error => res.status(400).json({ error }));
                }
            } else {
                res.status(401).json({
                    message: 'Requête non autorisée !'
                });
            }
        })
        .catch(error => res.status(500).json({ message: 'Database Error', error: error }))
};