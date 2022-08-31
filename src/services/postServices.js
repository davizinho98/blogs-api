const Sequelize = require('sequelize');

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

const getPostsBySearch = async ({ q }) => {
  const { Op } = Sequelize;
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } },
        { content: { [Op.like]: `%${q}%` } },
      ],
    },
    include: ARRAY_INCLUDES,
  });

  return posts;
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

const updatePost = async ({ title, content }, { id }, user) => {
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) {
    return null;
  }
  if (post.userId !== user.id) {
    return null;
  }

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const postUpdated = await BlogPost.findOne({
    where: { id },
    include: ARRAY_INCLUDES });

  return postUpdated;
};

const deletePost = async ({ id }, user) => {
  const post = await BlogPost.findOne({ where: { id } });

  if (!post) {
    return null;
  }

  if (post.userId !== user.id) {
    return 'unauthorized';
  }

  await BlogPost.destroy({ where: { id } });

  return true;
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost, getPostsBySearch };