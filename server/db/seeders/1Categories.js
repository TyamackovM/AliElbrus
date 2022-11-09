'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: "Dresses",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hoodies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shirts',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jeans',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shoes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Suits',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jeans & Pants',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sweaters',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jackets',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shoes',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Phones',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Walkie Talkie',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Accessories',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Laptops',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Desktops',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tablets',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cameras',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'TVs',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Drones',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Watches',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Rings',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Earings',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Cat Supplies',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Furniture',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Decor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Elbrus',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
