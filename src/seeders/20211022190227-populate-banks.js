'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Banks',
    [
      {
        name: 'Bank 1',
        country: 'Brazil',
      },
      {
        name: 'Bank 2',
        country: 'Brazil',
      },
      {
        name: 'Bank 3',
        country: 'Brazil',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Banks', null, {}),
};