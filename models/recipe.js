'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    steps: DataTypes.STRING,
    healthlabel: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};