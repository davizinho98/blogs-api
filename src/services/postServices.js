const { BlogPost } = require('../database/models');

const getPosts = async () => {
  const posts = await BlogPost.findAll();

  return posts;
};

const createPost = async ({ title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content, categoryIds });

  return post;
};

module.exports = { createPost, getPosts };