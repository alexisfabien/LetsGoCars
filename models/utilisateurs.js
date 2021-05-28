'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class utilisateurs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.utilisateurs.hasMany(models.reservations, {
          foreignKey: {
            allowNull: false,
          }
      })
    }
  };
  utilisateurs.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    mailcontact: DataTypes.INTEGER,
    telcontact: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'utilisateurs',
  });
  return utilisateurs;
};