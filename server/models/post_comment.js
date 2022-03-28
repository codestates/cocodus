"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post_comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post_comment.belongsTo(models.User);
      Post_comment.belongsTo(models.Post);
    }
  }
  Post_comment.init(
    {
      user_email: DataTypes.STRING,
      post_id: DataTypes.UUID,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post_comment",
    }
  );
  return Post_comment;
};
