const postServices = require('../services/postServices');

const getPosts = async (_request, response) => {
  const posts = await postServices.getPosts();

  response.status(200).json(posts);
};

const createPost = async (request, response) => {
  const post = await postServices.createPost(request.body);

  response.status(201).json(post);
};

module.exports = { createPost, getPosts };
