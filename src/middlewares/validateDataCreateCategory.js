const validateDataCreateCategory = (request, response, next) => {
  const { name } = request.body;

  if (!name) {
    return response.status(400).json({ message: '"name" is required' });
  }

  next();
};

module.exports = validateDataCreateCategory;
