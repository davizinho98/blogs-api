const { Category } = require('../database/models');

const getCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

const createCategory = async ({ name }) => {
  const category = await Category.create({ name });

  return category;
};

module.exports = { createCategory, getCategories };
