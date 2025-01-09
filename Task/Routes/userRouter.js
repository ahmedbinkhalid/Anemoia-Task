const userController = require('../Controllers/userController');
const express = require('express');
const router = express.Router();

router.post('/createUser', userController.signup);
router.get('/getUser', userController.getUser);

module.exports = router;