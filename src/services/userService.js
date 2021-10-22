const {User, Address} = require('../models/');

const internalError = {err: {message: 'Algo deu errado'}, status: 500};

const createNewUser = async (addressInfo, firstName, lastName, password) => {
    try {
      const newAddress = await Address.create(addressInfo);
      return newAddress;
    } catch (e) {
      console.log(e.message);
      return internalError
    }
}

module.exports = {
  createNewUser,
}