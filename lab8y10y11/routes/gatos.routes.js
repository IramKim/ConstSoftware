const express = require('express');
const path = require('path');
const isAuth = require('../util/is-auth');

const router = express.Router();

const gatosController = require('../controllers/gatos.controller');

router.get ('/', isAuth, gatosController.get_root);

router.get ('/basico', isAuth, gatosController.get_basico);

router.get ('/css/estiloslab1bulma.css', gatosController.get_css);

router.get ('/error', gatosController.get_error);

router.get ('/gatos', isAuth, gatosController.get_gatos);

router.post ('/misgatos', isAuth, gatosController.post_gatos);

router.get ('/misgatos', isAuth, gatosController.get_misgatos);

router.get('/misgatos:gato_id', isAuth, gatosController.get_misgatos);


module.exports = router;





