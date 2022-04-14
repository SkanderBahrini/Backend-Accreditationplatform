'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class debrief extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  debrief.init({
    name: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'debrief',
  });
  return debrief;
};