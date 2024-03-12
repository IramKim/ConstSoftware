const express = require('express');
const path = require('path');

const router = express.Router();

const gatosController = require('../controllers/gatos.controller');

router.get ('/', gatosController.get_root);

router.get ('/basico', gatosController.get_basico);

router.get ('/css/estiloslab1bulma.css', gatosController.get_css);

router.get ('/error', gatosController.get_error);

router.get ('/gatos', gatosController.get_gatos);

router.post ('/misgatos', gatosController.post_gatos);

router.get ('/misgatos', gatosController.get_misgatos);

router.get('/misgatos:gato_id', gatosController.get_misgatos);


module.exports = router;





