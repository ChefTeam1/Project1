'use strict';
module.exports = (sequelize, DataTypes) => {
  var HealthLabel = sequelize.define('HealthLabel', {
    paleo: DataTypes.STRING,
    keto: DataTypes.STRING,
    vegetarian: DataTypes.STRING,
    vegan: DataTypes.STRING,
    dairyfree: DataTypes.STRING,
    lowsugar: DataTypes.STRING,
    glutenfree: DataTypes.STRING
  }, {});
  HealthLabel.associate = function(models) {
    // associations can be defined here
  };
  return HealthLabel;
};