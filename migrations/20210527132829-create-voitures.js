'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('voitures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      marque: {
        allowNull: false,
        type: Sequelize.STRING
      },
      immat: {
        allowNull: false,
        type: Sequelize.STRING
      },
      carburant: {
        allowNull: false,
        type: Sequelize.STRING
      },
      km: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      am: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fuel: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      attachment: {
        allowNull: true,
        type: Sequelize.STRING
      },
      pxDD: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pxLV: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pxWE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pxWK: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('voitures');
  }
};