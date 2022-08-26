const express = require('express');
const router = express.Router();

const validateDataLogin = require('../middlewares/validateDataLogin');

const loginController = require('../controllers/loginController');

router.post('/', validateDataLogin, loginController.getTokenLogin);

module.exports = router;
