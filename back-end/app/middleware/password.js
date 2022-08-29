//--- Middleware de définition de règles pour validation du password ---//

// Import package validation du password
const passwordValidator = require('password-validator');

// Définition du schéma pour ce password
const passwordSchema = new passwordValidator();


// Règles pour la création du mot de passe
passwordSchema
    .is().min(8)                                    // Minimum length 8
    .is().max(50)                                  // Maximum length 50
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

// Vérification du mot de passe
module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.password)) {
        next();
    } else {
        return res.status(400).json({ error: "Mot de passe trop faible " + passwordSchema.validate('req.body.password', { list: true }) })
    }
}