const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const validateDataCreateUser = require('../middlewares/validateDataCreateUser');

router.post('/', validateDataCreateUser, userController.createUser);

module.exports = router;
