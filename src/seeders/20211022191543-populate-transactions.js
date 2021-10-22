'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Transactions',
    [
      {
        sending_account_id: 1,
        receiving_account_id: 2,
        value: 150,
        transaction_type: 'TED'
      },
      {
        sending_account_id: 2,
        receiving_account_id: 3,
        value: 150,
        transaction_type: 'PIX'
      },
      {
        sending_account_id: 3,
        receiving_account_id: 1,
        value: 150,
        transaction_type: 'PIX'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Transactions', null, {}),
};