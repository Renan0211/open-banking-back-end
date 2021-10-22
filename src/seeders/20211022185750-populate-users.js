'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        id: 1,
        first_name: 'Fulano',
        last_name: 'de Tal',
        password: 'fulano1234',
        address_id: 1,
        email: 'fulano@detal.com',
      },
      {
        id: 2,
        first_name: 'Ciclano',
        last_name: 'Silva',
        password: 'csilva456',
        address_id: 2,
        email: 'silva.ciclano@detal.com',
      },
      {
        id: 3,
        first_name: 'Beltrano',
        last_name: 'Oliveira',
        password: 'oliveira789',
        address_id: 3,
        email: 'beltrano.oliveira@detal.com',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};