const postServices = require('../services/postServices');

const getPosts = async (_request, response) => {
  const posts = await postServices.getPosts();

  response.status(200).json(posts);
};

const getPostById = async (request, response) => {
  const post = await postServices.getPostById(request.params);
  if (!post) {
    return response.status(404).json({ message: 'Post does not exist' });
  }
  response.status(200).json(post);
};

const createPost = async (request, response) => {
  const post = await postServices.createPost(request.body, request.user);
  if (!post) {
    return response.status(400).json({ message: '"categoryIds" not found' });
  }
  response.status(201).json(post);
};

module.exports = { createPost, getPosts, getPostById };
