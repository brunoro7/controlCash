'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        username: 'BrunoRo7',
        password: '$2b$10$Vm/nPH9Iu80LFn1xU9hdxeXPBBSdaX2IZov0ZlzF.gdwGNF9XCrB.',
      },
      {
        username: 'RafaelRo7',
        password: '$2b$10$95V9vYec/daMO6zKswHbeeaG63dOXvTuaz39qSCNQ2kMcjEWKNub6',
      },
      {
        username: 'BrunoRafaelRo7',
        password: '$2b$10$lSrG9.hohHbwIQbFrux.a.9v9KMv6eCDxFWaZFYvrneW65ARwX2Bq',
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};