const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const validateToken = async (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ message: 'Token not found' });
  }

  try {
    const { displayName } = jwt.verify(token, JWT_SECRET);

    const user = await User
      .findOne({ where: displayName });

    request.user = user;

    next();
  } catch (error) {
      return response.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
