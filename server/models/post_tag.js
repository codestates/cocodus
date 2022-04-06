"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post_tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post_tag.belongsTo(models.Tag);
      Post_tag.belongsTo(models.Post);
    }
  }
  Post_tag.init(
    {
      post_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Post_tag",
    }
  );
  return Post_tag;
};
