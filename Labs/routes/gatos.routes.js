const express = require('express');
const path = require('path');
const isAuth = require('../util/is-auth');
const canView = require('../util/canView');
const canCreate = require('../util/canCreate');

const router = express.Router();

const gatosController = require('../controllers/gatos.controller');


router.get ('/', isAuth, gatosController.get_root);

router.get ('/css/estiloslab1bulma.css', gatosController.get_css);

router.get ('/error', gatosController.get_error);

router.get ('/gatos', isAuth, canCreate, gatosController.get_gatos);

router.post ('/gatos', isAuth, canCreate, gatosController.post_gatos);

router.get ('/misgatos', isAuth, canView, gatosController.get_misgatos);

router.get('/misgatos:gato_id', isAuth, canView, gatosController.get_misgatos);


module.exports = router;





