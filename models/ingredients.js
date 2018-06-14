'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ingredients = sequelize.define('Ingredients', {
    ing1: DataTypes.STRING,
    ing2: DataTypes.STRING,
    ing3: DataTypes.STRING,
    ing4: DataTypes.STRING,
    ing5: DataTypes.STRING,
    ing6: DataTypes.STRING,
    ing7: DataTypes.STRING,
    ing8: DataTypes.STRING,
    ing9: DataTypes.STRING,
    ing10: DataTypes.STRING,
    ing11: DataTypes.STRING,
    ing12: DataTypes.STRING,
    ing13: DataTypes.STRING,
    ing14: DataTypes.STRING,
    ing15: DataTypes.STRING
  }, {});
  Ingredients.associate = function(models) {
    // associations can be defined here
  };
  return Ingredients;
};