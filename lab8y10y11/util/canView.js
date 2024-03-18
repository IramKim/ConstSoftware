module.exports = (request, response, next) => {
    let canView = false;
    for (let permiso of request.session.permisos) {
        if (permiso.permiso === 'ver_gatos') {
            canView = true;
        }
    }
    if (canView) {
        next();
    } else {

        response.redirect('/error');
    }
}

