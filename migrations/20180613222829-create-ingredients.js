'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ing1: {
        type: Sequelize.STRING
      },
      ing2: {
        type: Sequelize.STRING
      },
      ing3: {
        type: Sequelize.STRING
      },
      ing4: {
        type: Sequelize.STRING
      },
      ing5: {
        type: Sequelize.STRING
      },
      ing6: {
        type: Sequelize.STRING
      },
      ing7: {
        type: Sequelize.STRING
      },
      ing8: {
        type: Sequelize.STRING
      },
      ing9: {
        type: Sequelize.STRING
      },
      ing10: {
        type: Sequelize.STRING
      },
      ing11: {
        type: Sequelize.STRING
      },
      ing12: {
        type: Sequelize.STRING
      },
      ing13: {
        type: Sequelize.STRING
      },
      ing14: {
        type: Sequelize.STRING
      },
      ing15: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
<<<<<<< HEAD
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
=======
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
>>>>>>> af3355088f0a52caee4c72e2220217fb0d6e4271
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ingredients');
  }
<<<<<<< HEAD
};
=======
};

>>>>>>> af3355088f0a52caee4c72e2220217fb0d6e4271
