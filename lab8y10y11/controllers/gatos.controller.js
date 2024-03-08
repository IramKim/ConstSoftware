const Gato = require('../models/gato.model');

exports.get_root = (request, response, next) => {
    response.render('home');
};

exports.get_basico = (request, response, next) => {
    response.render('basico');
};

exports.get_css = (request, response, next) => {
    response.sendFile(path.join(__dirname,'../../css/estiloslab1bulma.css')); 
};

exports.get_error = (request, response, next) => {  
    response.status(404).send('Error 404: Not Found');
};

exports.get_gatos = (request, response, next) => {  
    response.render('gatos');
};

exports.post_gatos = (request, response, next) => { 
    console.log(request.body);
    const mi_gato = new Gato(request.body.nombre, request.body.nivel, request.body.imagen);
    mi_gato.save();    
    response.redirect('/misgatos');
};

exports.get_misgatos = (request, response, next) => {  
    response.render('misgatos', {gatos: Gato.fetchAll()});
};

