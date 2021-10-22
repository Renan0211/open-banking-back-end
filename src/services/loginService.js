const { User } = require('../models');

const login = async (email, password) => {
  try {
    const loggedUser = await User.findOne({ where: { email, password } });
    if (loggedUser === null) {
      return { err: { message: 'Invalid fields' }, status: 400 };
    }
    return loggedUser;
  } catch (e) {
    console.log(e.message);
    return { err: { message: 'Algo deu errado' }, status: 500 };
  }
};

module.exports = {
  login,
};