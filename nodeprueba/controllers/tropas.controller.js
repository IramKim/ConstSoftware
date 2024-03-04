const Tropa = require('../models/tropa.model');

exports.get_crear = (req, res) => {
    res.render('crear');
    };

exports.post_crear = (req, res) => {
    const tropa = new Tropa(req.body.vida);
    tropa.save();
    res.redirect('/');
    }

exports.get_tropas = (req, res) => {
    res.render('tropas', {
        tropas: Tropa.fetchAll()
        });
    }