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

const updatePost = async (request, response) => {
  const post = await postServices.updatePost(request.body, request.params, request.user);
  if (!post) {
    return response.status(401).json({ message: 'Unauthorized user' });
  }
  response.status(200).json(post);
};

const deletePost = async (request, response) => {
  const post = await postServices.deletePost(request.params, request.user);

  if (post === 'unauthorized') {
    return response.status(401).json({ message: 'Unauthorized user' });
  }

  if (!post) {
    return response.status(404).json({ message: 'Post does not exist' });
  }

  response.status(204).end();
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
