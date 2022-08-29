//--- Définition logique métier pour la ressource "user" ---//

const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { users } = require("../models");


// Import de bcrypt pour hachage password
const bcrypt = require('bcrypt');
// Import de crypto-js pour chiffrer adresse mail
const cryptojs = require('crypto-js');
// Import de package token d'authentification
const jwt = require('jsonwebtoken');
// Import package validation adresse mail
const emailValidator = require("email-validator");

// Import module d'interaction avec le système de fichiers
const fs = require('fs');

// Import/chargement package pour gérer et manipuler les variables d'environnement
require('dotenv').config();



// Enregistrement d'un nouvel utilisateur -- SIGNUP --
exports.signup = (req, res, next) => {
    console.log(req.body);
    if (!emailValidator.validate(req.body.email)) {
        return res.status(401).json({ message: 'Veuillez saisir une adresse e-mail valide' });
    }

    const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.EMAIL_CRYPTOJS_KEY}`).toString();
    console.log(emailCryptoJs, "EMAIL USER CRYPT");

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            console.log(hash);
            User.create({
                name: req.body.name,
                surname: req.body.surname,
                email: emailCryptoJs,
                password: hash,
                isAdmin: req.body.isAdmin
            })
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}


// Connexion d'un utilisateur déjà enregistré -- LOGIN --
exports.login = (req, res, next) => {
    // Crypter l'email de la requête
    const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.EMAIL_CRYPTOJS_KEY}`).toString();

    // Recherche si user déjà enregistré dans la database
    User.findOne({ where: { email: emailCryptoJs } })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ error: "Utilisateur non enregistré" })
            }
            /* Contrôler la validité du password:
            .compare le mot de passe de la requête avec le mot de passe hashé de la database*/
            bcrypt.compare(req.body.password, user.password)
                .then((checkpassword) => {
                    console.log(checkpassword);
                    if (!checkpassword) {
                        return res.status(401).json({ error: "Mot de passe incorrect" })
                    }
                    // Mot de passe valide
                    res.status(200).json({
                        // Attribution token
                        userId: user.id,
                        name: user.name,
                        surname: user.surname,
                        image: user.image,
                        isAdmin: user.isAdmin,
                        token: jwt.sign(
                            { userId: user.id, isAdmin: user.isAdmin },
                            process.env.JWT_KEY_TOKEN,
                            { expiresIn: "10h" }
                        )
                    });
                })
                .catch((error) => res.status(500).json({ error }))
        })
        .catch((error) => res.status(500).json({ error: "Database Error" }));
};


// Recherche d'un seul utilisateur
exports.getOneUser = (req, res, next) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
};


// Recherche de l'ensemble des utilisateurs
exports.getAllUsers = (req, res, next) => {
    User.findAll()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(400).json(error))
};


// Modification d'un compte utilisateur
exports.updateUser = (req, res, next) => {

    User.findOne({
        where: { id: req.params.id }
    })
        .then(user => {
            const updateUser = {
                name: req.body.name,
                surname: req.body.surname,
                password: req.body.password
            };
            if (req.body.password) { // <- si le password a été modifié on enregistre le hash
                bcrypt.hash(req.body.password, 8)
                    .then(hash => {
                        req.body.password = hash;
                        User.update(req.body, { where: { id: req.params.id } })
                            .then(user => {
                                res.status(201).json({ message: "Profil et/ou mot de passe modifié" });
                            })
                            .catch(error => res.status(400).json(error));
                    })
                    .catch(error => res.status(500).json(error));
            }
            if (req.file) {
                updateUser.image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
                const filename = restaurant.image.split('/images/')[1];
                fs.unlinkSync(`images/${filename}`)
                console.log(restaurant.image);
            };
            User.update(updateUser, {
                where: { id: req.params.id }
            })
                .then(() => res.status(200).json({ message: 'Utilisateur modifié !' }))
                .catch((error) => res.status(400).json({ error }));
        });
};



// Suppression d'un utilisateur
exports.delete = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY_TOKEN);
    const userId = decodedToken.userId
    const isAdmin = decodedToken.isAdmin

    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then((user) => {
            if (userId === user.id || isAdmin === true) {
                if (user.image != null) {
                    const filename = user.image.split('/images/')[1];
                    fs.unlink(`images/${filename}`, () => {
                        user.destroy()
                            .then(() => res.status(200).json({
                                message: 'Utilisateur supprimé'
                            }))
                            .catch(error => res.status(400).json({
                                error
                            }));
                    })
                } else {
                    user.destroy()
                        .then(() => res.status(200).json({ message: 'Utilisateur supprimé !' }))
                        .catch(error => res.status(400).json({ error }));
                }
            } else {
                res.status(403).json({
                    'error': 'UnAuthorize'
                })
            }
        })
};