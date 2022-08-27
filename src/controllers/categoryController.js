const categoryService = require('../services/categoryService');

const getCategories = async (request, response) => {
  const categories = await categoryService.getCategories();

  response.status(200).json(categories);
};

const createCategory = async (request, response) => {
  const category = await categoryService.createCategory(request.body);

  response.status(201).json(category);
};

module.exports = { createCategory, getCategories };
