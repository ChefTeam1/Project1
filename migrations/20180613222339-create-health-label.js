'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HealthLabels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paleo: {
        type: Sequelize.STRING
      },
      keto: {
        type: Sequelize.STRING
      },
      vegetarian: {
        type: Sequelize.STRING
      },
      vegan: {
        type: Sequelize.STRING
      },
      dairyfree: {
        type: Sequelize.STRING
      },
      lowsugar: {
        type: Sequelize.STRING
      },
      glutenfree: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HealthLabels');
  }
};