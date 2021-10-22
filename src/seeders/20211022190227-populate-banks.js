'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Banks',
    [
      {
        id: 1,
        name: 'Bank 1',
        country: 'Brazil',
      },
      {
        id: 2,
        name: 'Bank 2',
        country: 'Brazil',
      },
      {
        id: 3,
        name: 'Bank 3',
        country: 'Brazil',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Banks', null, {}),
};