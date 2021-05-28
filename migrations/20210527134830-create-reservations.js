'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reservations', {
      reservation: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      voiture: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'voitures',
          key: 'voiture'
        }
      },
      utilisateur: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'utilisateurs',
          key: 'utilisateur'
        }
      },
      dateDepart: {
        allowNull: false,
        type: Sequelize.DATE
      },
      dateRetour: {
        allowNull: false,
        type: Sequelize.DATE
      },
      adresse: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('reservations');
  }
};