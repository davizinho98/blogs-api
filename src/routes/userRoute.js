const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const validateDataCreateUser = require('../middlewares/validateDataCreateUser');
const validateToken = require('../middlewares/validateToken');

router.get('/', validateToken, userController.getUsers);

router.get('/:id', validateToken, userController.getUserById);

router.post('/', validateDataCreateUser, userController.createUser);

router.delete('/me', validateToken, userController.deleteUser);

module.exports = router;
