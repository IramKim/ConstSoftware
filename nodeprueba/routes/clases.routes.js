const express = require('express');
const router = express.Router();   

const tropasController = require('../controllers/tropas.controller');

router.get('/crear', tropasController.get_crear);
router.post('/crear', tropasController.post_crear);

module.exports = router;