const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

const validateToken = require('../middlewares/validateToken');
const validateDataCreatePost = require('../middlewares/validateDataCreatePost');

router.get('/', validateToken, postController.getPosts);
router.post('/', validateToken, validateDataCreatePost, postController.createPost);

module.exports = router;
