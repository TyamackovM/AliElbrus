'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({WishList, Cart, Order}) {
      this.hasMany(WishList, {foreignKey : 'user_id'})
      this.hasMany(Cart, {foreignKey : 'user_id'})
      this.hasMany(Order, {foreignKey : 'user_id'})
    }
  }
  User.init(
    {
      login: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.STRING,
      wishListItem_id: DataTypes.INTEGER,
      shoppingCartItem_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
