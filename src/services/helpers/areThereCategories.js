const categoryService = require('../categoryService');

const areThereCategories = async (categoryIds) => {
  const categories = await categoryService.getCategories();

  return categoryIds
    .every((categoryId) => categories
    .some((category) => Number(category.id) === Number(categoryId)));
};

module.exports = { areThereCategories };
