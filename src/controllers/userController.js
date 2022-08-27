const userService = require('../services/userService');

const getUsers = async (request, response) => {
  const users = await userService.getUsers();

  response.status(200).json(users);
};

const createUser = async (request, response) => {
  try {
    const token = await userService.createUser(request.body);

    response.status(201).json({ token });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers };
