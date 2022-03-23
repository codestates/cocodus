"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_like.belongsTo(models.User);
      User_like.belongsTo(models.Post);
    }
  }
  User_like.init(
    {
      user_email: DataTypes.STRING,
      post_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "User_like",
    }
  );
  return User_like;
};
