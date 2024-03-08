//Esta funcion renderiza una vista, y le pasa un objeto llamado username cuyo valor se obtiene con request.session.username
//y en caso de que sea indefinido o nulo, se le asigna una cadena vacia.
exports.getLogin = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
    });
};

exports.postLogin = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/');
};

exports.getLogout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
};