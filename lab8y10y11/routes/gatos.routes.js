const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('home');
});

router.get('/Basico', (request, response, next) => {
    response.render('basico');
});

router.get('/css', (request, response, next) => {
    response.sendFile(path.join(__dirname,'../../css/estiloslab1bulma.css')); 
});

router.get('/Error', (request, response, next) => {
    response.status(404).send('Error 404: Not Found');
});

router.get('/Gatos', (request, response, next) => {
    response.render('gatos');
});


module.exports = router;

