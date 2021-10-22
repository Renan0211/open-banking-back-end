'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Transactions',
    [
      {
        id: 1,
        sending_account_id: 1,
        receiving_account_id: 2,
        value: 150,
        transaction_type: 'TED'
      },
      {
        id: 2,
        sending_account_id: 2,
        receiving_account_id: 3,
        value: 150,
        transaction_type: 'PIX'
      },
      {
        id: 3,
        sending_account_id: 3,
        receiving_account_id: 1,
        value: 150,
        transaction_type: 'PIX'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Transactions', null, {}),
};