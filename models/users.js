const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("users", {
    userName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      defaultValue: "test@gmail.com",
    },
    gender: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  });
  return Users;
};
