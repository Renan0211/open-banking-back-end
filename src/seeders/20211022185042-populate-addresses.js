'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Addresses',
    [
      {
        id: 1,
        country: 'Brazil',
        state: 'São Paulo',
        city: 'Campinas',
        street: 'Rua Aquela Lá',
        number: 123,
      },
      {
        id: 2,
        country: 'Brazil',
        state: 'Minas Gerais',
        city: 'Belo Horizonte',
        street: 'Rua Aquela Outra',
        number: 456,
      },
      {
        id:3,
        country: 'Brazil',
        state: 'Rio de Janeiro',
        city: 'Niterói',
        street: 'Rua Mais Uma',
        number: 789,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Addresses', null, {}),
};