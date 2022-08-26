const { User } = require('../database/models');
const jwt = require('jsonwebtoken');

const getTokenLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new Error('Invalid fields');
  }

  if (user.password !== password) {
    throw new Error('Invalid fields');
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);
  
  return token;
};

module.exports = { getTokenLogin };
