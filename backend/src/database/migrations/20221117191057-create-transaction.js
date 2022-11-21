'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      debitedAccountId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      creditedAccountId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      value: {
        allowNull: true,
        type: Sequelize.DECIMAL(9,2)
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('transactions');
  }
};
