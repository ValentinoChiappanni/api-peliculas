'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Actores.belongsToMany(models.Peliculas, {through: 'PeliculasActores'})
    }
  }
  Actores.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    edad: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Actores',
  });
  return Actores;
};