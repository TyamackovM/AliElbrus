'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: "Women's Fashion",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Men's Fashion",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Phones & Telecommunications',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Computer, Office & Security',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Consumer Electronics',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jewelry & Watches',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Home, Pet & Appliances',
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
