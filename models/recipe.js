'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    ing1: DataTypes.STRING,
    ing2: DataTypes.STRING,
    ing3: DataTypes.STRING,
    ing4: DataTypes.STRING,
    ing5: DataTypes.STRING,
    step1: DataTypes.STRING,
    step2: DataTypes.STRING,
    step3: DataTypes.STRING,
    step4: DataTypes.STRING,
    step5: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // Recipe.belongsTo(models.Users, {
    //   // foreignKey: {
    //   //   allowNull: false
    //   // }
    // });
    // ingredients: DataTypes.STRING,
    steps: DataTypes.STRING,
    healthlabel: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // Recipe.hasOne(models.Steps);
    // Recipe.hasOne(models.Ingredients);
  };
  return Recipe;
};