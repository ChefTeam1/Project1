'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Steps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      s1: {
        type: Sequelize.STRING
      },
      s2: {
        type: Sequelize.STRING
      },
      s3: {
        type: Sequelize.STRING
      },
      s4: {
        type: Sequelize.STRING
      },
      s5: {
        type: Sequelize.STRING
      },
      s6: {
        type: Sequelize.STRING
      },
      s7: {
        type: Sequelize.STRING
      },
      s8: {
        type: Sequelize.STRING
      },
      s9: {
        type: Sequelize.STRING
      },
      s10: {
        type: Sequelize.STRING
      },
      s11: {
        type: Sequelize.STRING
      },
      s12: {
        type: Sequelize.STRING
      },
      s13: {
        type: Sequelize.STRING
      },
      s14: {
        type: Sequelize.STRING
      },
      s15: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,

        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Steps');
  }
};