//imports
const models = require('../models');
const asyncLib = require('async');

// Constantes
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


module.exports = {
    register: (req, res) => {
        //Params

        if (!EMAIL_REGEX.test(req.body.email)){
            return res.status(400).json({ 'error': 'email is not valid '});
        } 
        
        asyncLib.waterfall([
            (done) => {
                models.utilisateurs.findOne({
                    attributes: ['email'],
                    where: { email: req.body.email }
                }).then((userFound) => {
                    done(null, userFound);
                })
                .catch((err) => {
                    return res.status(500).json({ 'error' : 'cannot add user' });
                });
            },
            (userFound, done) => {
                if (!userFound) {
                    const newUser = models.utilisateurs.create({
                        nom : req.body.nom,
                        prenom : req.body.prenom,
                        telephone : req.body.telephone,
                        email: req.body.email,
                        mailcontact : req.body.mailcontact,
                        telcontact : req.body.telcontact,
                        message : req.body.message
                    })
                    .then((newUser) => {
                        done(newUser);
                    })
                    .catch((err) => {
                        console.log('error', err);
                        return res.status(500).json({ 'error': 'Partie de kévin, user existe deja'});
                    });
                    
                }
            },
        ],  (newUser) => {
                console.log('tttttttt : ', newUser);
                if (newUser) {
                    return res.status(201).json({
                        'userId' : newUser.id
                    });
                } else {
                    return res.status(500).json({ 'error': 'cannot add user'});
                }
        });
        //Vérification si l'email est déjà présent (kevin)
      
        



    }
};