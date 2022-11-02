'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Items',
      [
        {
          price: 45.5,
          image: "https://ae04.alicdn.com/kf/Sd2f53935fdf044aebd546891c2432c63r.jpg",
          title: "Women's long flash evening dress, asymmetric, off shoulder, sleeveless, mop, prom dress",
          category_id: 1,
          comment_id: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          price: 67.5,
          image: "https://ae04.alicdn.com/kf/Sde2034ac1916432c85c210c66c116529S.jpg",
          title: "Women's long flash evening dress, asymmetric, off shoulder, sleeveless, mop, prom dress",
          category_id: 1,
          comment_id: 0,
          createdAt: new Date(),
          updatedAt: new Date()
        },        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
