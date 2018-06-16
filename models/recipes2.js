'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipes2 = sequelize.define('Recipes2', {
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
  Recipes2.associate = function(models) {
    // associations can be defined here
  };
  return Recipes2;
};