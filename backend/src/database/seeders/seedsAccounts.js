'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('accounts', [
      {
        id: 1,
        balance: 100.00,
      },
      {
        id: 2,
        balance: 100.00,
      },
      {
        id: 3,
        balance: 100.00,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};