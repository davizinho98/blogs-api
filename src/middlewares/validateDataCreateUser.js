const validateData = (displayName, email, password, response) => {
  if (!displayName || !email || !password) {
    return response.status(400).json({ message: 'Some required fields are missing' });
  }
};

const validateDataCreateUser = (request, response, next) => {
  const { displayName, email, password } = request.body;
  const validate = validateData(displayName, email, password, response);
  if (displayName.length < 8) {
    return response
      .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }
  const validEmail = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
  if (!validEmail) {
    return response.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return response
      .status(400).json({ message: '"password" length must be at least 6 characters long' });
  }

  return validate || next();
};

module.exports = validateDataCreateUser;
