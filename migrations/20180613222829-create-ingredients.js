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
      score: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
=======
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
>>>>>>> 794de6f82a67c6eb1e008fb1bf855a52cf0fa5e0
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ingredients');
  }
<<<<<<< HEAD

};



};

};


=======
};

>>>>>>> 794de6f82a67c6eb1e008fb1bf855a52cf0fa5e0
