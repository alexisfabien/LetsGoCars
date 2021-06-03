'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_voiture: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'voitures',
          key: 'id'
        }
      },
      id_utilisateur: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'utilisateurs',
          key: 'id'
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