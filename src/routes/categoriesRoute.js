const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');
const validateDataCreateCategory = require('../middlewares/validateDataCreateCategory');
const validateToken = require('../middlewares/validateToken');

router.get('/', validateToken, categoryController.getCategories);
router.post('/', validateToken, validateDataCreateCategory, categoryController.createCategory);

module.exports = router;