//--- Définition logique métier pour la ressource "restaurant" ---//

// Importation

//const { restaurant } = require("../models");
const db = require("../models");
const Restaurant = db.restaurant;
const Op = db.Sequelize.Op;
const fs = require("fs");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


// CRUD Restaurants

// Create and Save a new Restaurant
exports.createRestaurant = (req, res, next) => {
    if (req.file) {
        Restaurant.create({
            name: req.body.name,
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
            note: req.body.note,
            drive_time: req.body.drive_time,
            category: req.body.category,
        })
            .then(() => res.status(201).json({ message: 'Restaurant créé !' }))
            .catch(error => res.status(400).json({ error }));
    } else {
        Restaurant.create({
            name: req.body.name,
            note: req.body.note,
            drive_time: req.body.drive_time,
            category: req.body.category,
        })
            .then(() => res.status(201).json({ message: 'Restaurant créé !' }))
            .catch(error => res.status(400).json({ error }));
    }
};


// Find all Restaurants from the database.
exports.findAll = (req, res, next) => {

    Restaurant.findAll({
        include: [
            "menu"
        ]
    })
        .then(response => res.status(200).json(response))
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
};

// Find one Restaurant with ID
exports.findRestaurantById = (req, res, next) => {

    Restaurant.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            "menu"
        ]
    })
        .then(response => res.status(200).json(response))
        .catch(err => console.log(err))

};


// Update a Restaurant by the id in the request
exports.updateRestaurant = (req, res, next) => {
    const id = req.params.id;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY_TOKEN);
    const isAdmin = decodedToken.isAdmin

    Restaurant.findOne({ where: { id: id } })
        .then(restaurant => {
            if (isAdmin === true) {
                const modifyRestaurant = {
                    name: req.body.name,
                    note: req.body.note,
                    drive_time: req.body.drive_time,
                    category: req.body.category,
                }
                if (req.file) {
                    modifyRestaurant.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
                    const filename = restaurant.image.split('/images/')[1];
                    fs.unlinkSync(`images/${filename}`)
                    console.log(restaurant.image);
                }

                Restaurant.update(modifyRestaurant, { where: { id: id } })
                    .then(() => res.status(200).json({ message: 'Restaurant modifié !' }))
                    .catch(error => res.status(400).json({ error }))
            } else {
                return res.status(403).json({ 'error': 'UnAuthorize' });
            }
        })
        .catch((error) => res.status(500).json({ message: 'Database Error', error: error }));
};


// Delete a Restaurant
exports.deleteRestaurant = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY_TOKEN);
    const isAdmin = decodedToken.isAdmin

    Restaurant.findOne({
        where: { id: req.params.id }
    })
        .then(restaurant => {
            if (isAdmin === true) {
                if (restaurant.image != null) {
                    const filename = restaurant.image.split('/images/')[1];
                    fs.unlink(`images/${filename}`, () => {
                        Restaurant.destroy({ where: { id: req.params.id } })
                            .then(() => res.status(200).json({ message: 'Restaurant supprimé !' }))
                            .catch(error => res.status(400).json({ error }))
                    })
                } else {
                    Restaurant.destroy({
                        where: { id: req.params.id }
                    })
                        .then(() => res.status(200).json({
                            message: 'Restaurant supprimé de la BDD !'
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
