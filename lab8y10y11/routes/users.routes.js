const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');    

router.get('/users/login', usersController.getLogin);
router.post('/users/login', usersController.postLogin);
router.get('/users/logout', usersController.getLogout);

module.exports = router;