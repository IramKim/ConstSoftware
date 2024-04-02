module.exports = (request, response, next) => {
    let canCreate = false;
    for (let permiso of request.session.permisos) {
        if (permiso.permiso === 'adoptar_gatos') {
            canCreate = true;
        }
    }
    if (canCreate) {
        next();
    } else {
        response.redirect('/error');
    }
}