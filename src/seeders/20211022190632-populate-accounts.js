'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Accounts',
    [
      {
        id: 1,
        user_id: 1,
        bank_id: 2,
        balance: 123456,
      },
      {
        id: 2,
        user_id: 2,
        bank_id: 3,
        balance: 654321,
      },
      {
        id: 3,
        user_id: 3,
        bank_id: 1,
        balance: 456123,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Accounts', null, {}),
};