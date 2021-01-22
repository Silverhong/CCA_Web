'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuHasCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MenuHasCategory.init({
    menu_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MenuHasCategory',
  });
  return MenuHasCategory;
};