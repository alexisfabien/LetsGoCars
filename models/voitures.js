'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voitures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.voitures.hasMany(models.reservations, {
        foreignKey: {
          allowNull: false,
        }
    })
    }
  };
  voitures.init({
    marque: DataTypes.STRING,
    immat: DataTypes.STRING,
    carburant: DataTypes.STRING,
    km: DataTypes.INTEGER,
    am: DataTypes.INTEGER,
    fuel: DataTypes.INTEGER,
    attachment: DataTypes.STRING,
    pxDD: DataTypes.INTEGER,
    pxLV: DataTypes.INTEGER,
    pxWE: DataTypes.INTEGER,
    pxWK: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'voitures',
  });
  return voitures;
};