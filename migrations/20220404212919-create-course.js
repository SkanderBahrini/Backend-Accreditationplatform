'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
         courseCode: {
          type: Sequelize.STRING
      },
    
      courseName: {
        type: Sequelize.STRING
      },
         courseRepresentative: {
        type: Sequelize.STRING
      },

      courseDescription: {
          type: Sequelize.STRING
      },
    

        Group_id: {
         type: Sequelize.INTEGER,
         allowNull:false,

         References: {
           model: 'Groups',
           key:'id'
         }

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
    await queryInterface.dropTable('Courses');
  }
};