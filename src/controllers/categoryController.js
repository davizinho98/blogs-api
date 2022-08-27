const categoryService = require('../services/categoryService');

const createCategory = async (request, response) => {
  const category = await categoryService.createCategory(request.body);

  response.status(201).json(category);
};

module.exports = { createCategory };
