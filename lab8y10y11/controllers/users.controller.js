const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario.model');


//Esta funcion renderiza una vista, y le pasa un objeto llamado username cuyo valor se obtiene con request.session.username
//y en caso de que sea indefinido o nulo, se le asigna una cadena vacia.
exports.getLogin = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registro: false,
        csrfToken: request.csrfToken(),
        error: error,
    });
};

exports.postLogin = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
        .then(([usuarios, fieldData]) => {
            if (usuarios.length == 1) {
                const usuario = usuarios[0];
                bcrypt.compare(request.body.password, usuario.password)
                    .then((doMatch) => {
                        if (doMatch) {
                            request.session.username = usuario.nombre;
                            request.session.isLoggedIn = true;
                            response.redirect('/');
                        } else {
                            request.session.error = 'Usuario y/o contraseña incorrectos';
                            response.redirect('/users/login');
                        }
                    })
                    .catch((error) => {console.log(error);
                    });

                } else {
                    request.session.error = 'Usuario y/o contraseña incorrectos';
                    response.redirect('/users/login');
                }
        })
        .catch((error) => {
            console.log(error);});
    };

exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
};

exports.getSignup = (request, response, next) => {
    const error = request.session.error || '';
    request.session.error = '';
    response.render('login', {
        username: request.session.username || '',
        registro: true,
        csrfToken: request.csrfToken(),
        error: error,
    });
};

exports.postSignup = (request, response, next) => {
    const nuevo_usuario = new Usuario(
        request.body.username, request.body.nombre, request.body.password
    );
    nuevo_usuario.save()
        .then(() => {
            response.redirect('/users/login');
        })
        .catch((error) => {
            console.log(error);
        });
}