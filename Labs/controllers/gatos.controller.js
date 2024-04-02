const { response } = require('express');
const Gato = require('../models/gato.model');

exports.get_root = (request, response, next) => {
    response.render('home', {
        username: request.session.username || '',
        permisos: request.session.permisos || [],
    });
};

exports.get_css = (request, response, next) => {
    response.sendFile(path.join(__dirname,'../../css/estiloslab1bulma.css')); 
};

exports.get_error = (request, response, next) => {  
    response.status(404).send('Error 404: Not Found');
};

exports.get_gatos = (request, response, next) => {  
    response.render('gatos', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.post_gatos = (request, response, next) => { 
    console.log(request.body);
    const mi_gato = new Gato(request.body.nombre, request.body.nivel, request.body.imagen);
    mi_gato.save().then(([rows,fieldData]) => {
        response.setHeader('Set-Cookie', 'ultimo_gato=' + mi_gato.nombre + '; HttpOnly');
        response.redirect('/misgatos');
        }).catch((error) => {
            console.log(error);
    });
};

exports.get_misgatos = (request, response, next) => { 
    console.log(request.cookies);
    console.log(request.cookies.ultimo_gato);

    Gato.fetch(request.params.gato_id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('misgatos', {
            gatos: rows,
            ultimo_gato: request.cookies.ultimo_gato || '',
            username: request.session.username || '',
            permisos: request.session.permisos || [],
        });
    })
    .catch((error) => {
        console.log(error);
    });
};


