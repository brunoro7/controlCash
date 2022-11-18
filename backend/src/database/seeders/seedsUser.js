'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'BrunoRo7',
        password: 'codando777',
      },
      {
        username: 'Rafael',
        password: '777codado',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};