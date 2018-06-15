'use strict';
module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  Posts.associate = function(models) {
    // Posts.belongsTo(models.Users, {
    //   // foreignKey: {
    //   //   allowNull: false
    //   // }
    // });
  };
  return Posts;
};