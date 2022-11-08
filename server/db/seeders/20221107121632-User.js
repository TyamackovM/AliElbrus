'use strict';
const bcrypt = require('bcrypt');

async function seedAdmin() {
  const hash = await bcrypt.hash('admin', 10);
  return [
    {
      login: 'admin',
      email: 'admin@alielbrus.com',
      password: hash,
      status: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', await seedAdmin(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
