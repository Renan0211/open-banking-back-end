const {User, Address} = require('../models');

const internalError = {err: {message: 'Algo deu errado'}, status: 500};

const createNewUser = async (addressInfo, firstName, email, lastName, password) => {
    try {
      const newAddress = await Address.create(addressInfo);
      const newAddressId = newAddress.id;
      const newUser = await User.create({firstName, lastName, password, email, addressId: newAddressId});
      return newUser;
    } catch (e) {
      console.log(e.message);
      return internalError
    }
}

module.exports = {
  createNewUser,
}