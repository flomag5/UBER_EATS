//--- Définition logique métier pour la ressource "like" ---//

// Importation 
const db = require("../models");
const Like = db.like;
const User = db.user;
const Op = db.Sequelize.Op;

// Logique de LIKE d'un restaurant/menu
exports.likeItem = (req, res) => {
    try {
        console.log(req.body);
        let { like, userId, restauId } = req.body;
        Like.create({ like, userId, restauId })
            .then(addLike => {
                console.log("New like added !");
                res.status(201).json(addLike);
            })
            .catch(error => res.status(400).json(error))
    } catch {
        error => res.status(500).json(error);
    }
};


// Logique de UNLIKE d'un restaurant/menu
exports.unlikeItem = (req, res) => {
    console.log(req.body)
    try {
        Like.destroy({ where: { restauId: req.params.restauId, userId: req.body.userId } })
            .then(like => {
                console.log(like, "Unlike this !");
                res.status(200).end();
            })
            .catch(error => res.status(400).json(error))
    } catch {
        error => res.status(500).json(error);
    }
};


// Logique pour récupérer les likes d'un restaurant
exports.getLikes = (req, res) => {
    try {
        Like.findAll({
            where: {
                restauId: req.params.restauId
            },
            include: [
                "user"
            ],
        })
            .then(like => {
                res.status(200).json(like);
            })
            .catch(error => res.status(400).json(error))
    } catch {
        error => res.status(500).json(error);
    }
};