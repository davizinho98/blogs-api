const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');

const validateToken = require('../middlewares/validateToken');
const validateDataCreatePost = require('../middlewares/validateDataCreatePost');
const validateDataUpdatePost = require('../middlewares/validateDataUpdatePost');

router.get('/', validateToken, postController.getPosts);
router.get('/search', validateToken, postController.getPostsBySearch);
router.post('/', validateToken, validateDataCreatePost, postController.createPost);
router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, validateDataUpdatePost, postController.updatePost);
router.delete('/:id', validateToken, postController.deletePost);

module.exports = router;
