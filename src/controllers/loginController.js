const loginService = require('../services/loginService');

const getTokenLogin = async (request, response) => {
  try {
    const token = await loginService.getTokenLogin(request.body);

    return response.status(200).json({ token });
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

module.exports = { getTokenLogin };
