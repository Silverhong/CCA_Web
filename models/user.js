'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * 
     */
    static associate(models) {
      // define association here

      //Models/
      const RoleModel = sequelize.define('Roles', {});
      const UserModel = sequelize.define('User', {});

      //Relations
      UserModel.belongsTo(RoleModel, {});
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};