'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Item}) {
      this.belongsTo(User, {foreignKey : 'user_id'})
      this.belongsTo(Item, {foreignKey : 'item_id'})
    }
  }
  Order.init({
    user_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};