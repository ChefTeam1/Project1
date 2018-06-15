'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    // createdAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW
    // },
    // updatedAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW
    // }
  }, {});
  Users.associate = function(models) {
    // Users.hasMany(models.Recipe, {
    //   onDelete: "cascade"
    // });
    // Users.hasMany(models.Posts, {
    //   onDelete: "cascade"
    // });
  };
  return Users;
};


// users has one post
// users has many recipes
// post belongs to users

//create btn in html for upvote/downvote
// create js file for onclick event
// 'on click' query database - increase score +- 1