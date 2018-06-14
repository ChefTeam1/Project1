'use strict';
module.exports = (sequelize, DataTypes) => {
  var Steps = sequelize.define('Steps', {
    s1: DataTypes.STRING,
    s2: DataTypes.STRING,
    s3: DataTypes.STRING,
    s4: DataTypes.STRING,
    s5: DataTypes.STRING,
    s6: DataTypes.STRING,
    s7: DataTypes.STRING,
    s8: DataTypes.STRING,
    s9: DataTypes.STRING,
    s10: DataTypes.STRING,
    s11: DataTypes.STRING,
    s12: DataTypes.STRING,
    s13: DataTypes.STRING,
    s14: DataTypes.STRING,
    s15: DataTypes.STRING
  }, {});
  Steps.associate = function(models) {
    // associations can be defined here
  };
  return Steps;
};