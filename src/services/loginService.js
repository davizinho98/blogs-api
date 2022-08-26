const { User } = require('../database/models');
const getToken = require('../utils/getToken');

const getTokenLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('Invalid fields');
  }

  if (user.password !== password) {
    throw new Error('Invalid fields');
  }

  const token = getToken(user);
  
  return token;
};

module.exports = { getTokenLogin };
