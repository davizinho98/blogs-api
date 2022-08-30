const { BlogPost, User, Category, PostCategory } = require('../database/models');

const { areThereCategories } = require('./helpers/areThereCategories');

const ARRAY_INCLUDES = [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: Category, as: 'categories', through: { attributes: [] } },
];

const getPosts = async () => {
  const posts = await BlogPost.findAll({ include: ARRAY_INCLUDES });

  return posts;
};

const getPostById = async ({ id }) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: ARRAY_INCLUDES,
  });

  if (!post) {
    return null;
  }

  return post;
};

const createPost = async ({ title, content, categoryIds }, { id: userId }) => {
  const bool = await areThereCategories(categoryIds);
  if (!bool) {
    return null;
  }
  const post = await BlogPost.create({ title, content, userId });

  const postId = post.id;
  categoryIds.forEach(async (categoryId) => {
    await PostCategory.create({ categoryId, postId });
  });

  return post;
};

module.exports = { createPost, getPosts, getPostById };