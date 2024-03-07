const express = require('express');
const path = require('path');

const router = express.Router();

const gatos = [
    {
      clase: "Gato dormido", 
      nivel: 1,  
      imagen: "https://static.wikia.nocookie.net/clashofclans/images/6/68/Avatar_Archer.png",
    },
    {
      clase: "Gato gordo", 
      nivel: 1, 
      imagen: "https://static.wikia.nocookie.net/clashofclans/images/6/68/Avatar_Archer.png",
    }
  ];



router.get('/', (request, response, next) => {
    response.render('home');
});

router.get('/basico', (request, response, next) => {
    response.render('basico');
});

router.get('/css', (request, response, next) => {
    response.sendFile(path.join(__dirname,'../../css/estiloslab1bulma.css')); 
});

router.get('/error', (request, response, next) => {
    response.status(404).send('Error 404: Not Found');
});

router.get('/gatos', (request, response, next) => {
    response.render('gatos');
});

router.post('/gatos', (request, response, next) => {
    console.log(request.body);
    gatos.push({
      nombre: request.body.nombre, 
      nivel: 1,  
      imagen: request.body.imagen,
    });
    response.redirect('/misgatos');
});

router.get('/misgatos', (request, response, next) => {
    response.render('misgatos', {gatos: gatos});
});


module.exports = router;



