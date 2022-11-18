'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('accounts', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.DECIMAL(9,2),
        defaultValue: 100.00
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('accounts');
  }
};
