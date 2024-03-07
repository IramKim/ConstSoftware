
//Cookies van En los controladores

exports.accion = (request, response, next) => {
    response.setHeader('Set-Cookie', 'nombre_cookie', 'valor_cookie');
}


