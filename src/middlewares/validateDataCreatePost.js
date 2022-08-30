const validateDataCreatePost = (request, response, next) => {
  const { title, content, categoryIds } = request.body;

  if (!title || !content || !categoryIds || categoryIds.length === 0) {
    return response.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = validateDataCreatePost;