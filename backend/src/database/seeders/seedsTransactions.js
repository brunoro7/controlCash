'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('transactions', [
      {
        id: 1,
        debitedAccountId: 1,
        creditedAccountId: 2,
        value: 50.00,
        createdAt: '2022-10-20T00:00:00.000Z',
      },
      {
        id: 2,
        debitedAccountId: 2,
        creditedAccountId: 1,
        value: 10.00,
        createdAt: '2022-11-05T00:00:00.000Z',
      },
      {
        id: 3,
        debitedAccountId: 3,
        creditedAccountId: 1,
        value: 40.00,
        createdAt: '2022-11-17T00:00:00.000Z',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('transactions', null, {});
  },
};