const { User } = require('../database/models');
const getToken = require('../utils/getToken');

const getUsers = async () => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return users;
};

const createUser = async ({ displayName, email, password, image }) => {
  try {
    const user = await User.create({ displayName, email, password, image });
    const token = getToken(user);

    return token;
  } catch (error) {
    if (error) {
      throw new Error('User already registered');
    }
  }
};

module.exports = { createUser, getUsers };