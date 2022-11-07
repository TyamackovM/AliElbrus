'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      image: {
        type: Sequelize.TEXT
      },
      title: {
        type: Sequelize.TEXT
      },
      size: {
        type: Sequelize.TEXT
      },
      color: {
        type: Sequelize.TEXT
      },
      brand: {
        type: Sequelize.TEXT
      },
      processor: {
        type: Sequelize.TEXT
      },
      display: {
        type: Sequelize.TEXT
      },
      gender: {
        type: Sequelize.TEXT
      },
      style: {
        type: Sequelize.TEXT
      },
       category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};