const { Op } = require("sequelize");
const {User, Address, Transaction, Account} = require('../models');

const internalError = {err: {message: 'Something went wrong'}, status: 500};

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

const getUserAccounts = async (userId) => {
  try {
    const userInfo = await Account.findAll({where: {user_id: userId}});
    return userInfo;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
}

const getUserBankStatement = async(userId) => {
  try {
    const userAccounts = await getUserAccounts(userId);
    const accountsIds = userAccounts.map(account => account.id);
    const bankStatement = await Transaction.findAll({where: {
      [Op.or]: [{sendingAccountId: {[Op.in]: accountsIds}}, {receivingAccountId: {[Op.in]: accountsIds}}]
    }});
    return bankStatement;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
}

const getUserBalance = async (userId) => {
  try {
    const userAccounts = getUserAccounts(userId);
  return userAccounts;
  } catch (e) {
    console.log(e.message);
    return internalError;
  }
}

module.exports = {
  createNewUser,
  getUserBankStatement,
  getUserAccounts,
  getUserBalance,
}