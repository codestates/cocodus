"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_view extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_view.belongsTo(models.User);
      User_view.belongsTo(models.Post);
    }
  }
  User_view.init(
    {
      user_id: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_view",
      timestamps: false,
    }
  );
  return User_view;
};
