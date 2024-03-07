const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');    

router.get('/login', usersController.getLogin);
router.post('/login', usersController.postLogin);


module.exports = router;