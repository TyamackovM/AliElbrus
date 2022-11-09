'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category, WishList, Cart, Order }) {
      this.belongsTo(Category, { foreignKey: "category_id" })
      this.hasMany(WishList, { foreignKey: "item_id" })
      this.hasMany(Cart, { foreignKey: "item_id" })
      this.hasMany(Order, { foreignKey: "item_id" })
    }
  }
  Item.init({
    price: DataTypes.FLOAT,
    image: DataTypes.TEXT,
    title: DataTypes.TEXT,
    size: DataTypes.TEXT,
    color: DataTypes.TEXT,
    brand: DataTypes.TEXT,
    processor: DataTypes.TEXT,
    display: DataTypes.TEXT,
    gender: DataTypes.TEXT,
    style: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
    }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};