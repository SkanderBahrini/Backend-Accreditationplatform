'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('debriefs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
        professor_id: {
         type: Sequelize.INTEGER,
         allowNull:false,

         References: {
           model: 'Users',
           key:'id'
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
    await queryInterface.dropTable('debriefs');
  }
};