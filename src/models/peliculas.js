'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Peliculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Peliculas.belongsToMany(models.Actores, {through: 'PeliculasActores'})
    }
  }
  Peliculas.init({
    nombre: DataTypes.STRING,
    añoEstreno: DataTypes.NUMBER,
    plataforma: DataTypes.STRING,
    estaDisponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Peliculas',
  });
  return Peliculas;
};