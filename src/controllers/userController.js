const userService = require('../services/userService');

const createUser = async (request, response) => {
  try {
    const token = await userService.createUser(request.body);

    response.status(201).json({ token });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = { createUser };