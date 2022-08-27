const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

const validateToken = require('../middlewares/validateToken');

router.get('/', validateToken, postController.getPosts);
router.post('/', validateToken, postController.createPost);

module.exports = router;
