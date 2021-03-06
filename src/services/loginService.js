const { User } = require('../models');

const internalError = {err: {message: 'Something went wrong'}, status: 500};

const login = async (email, password) => {
  try {
    const loggedUser = await User.findOne({ where: { email, password } });
    if (loggedUser === null) {
      return { err: { message: 'Invalid fields' }, status: 400 };
    }
    return loggedUser;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
};

module.exports = {
  login,
};