"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User);
      Post.hasMany(models.Post_comment);
      Post.hasMany(models.Post_tag);
      Post.hasMany(models.User_like);
      Post.hasMany(models.User_view);
    }
  }
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "고유번호 UUID",
      },
      user_id: DataTypes.STRING,
      jsonfile: DataTypes.JSON,
      recruiting: DataTypes.BOOLEAN,
      online: DataTypes.BOOLEAN,
      veiw_count: DataTypes.INTEGER,
      total_like: DataTypes.INTEGER,
      total_comment: DataTypes.INTEGER,
      lat: DataTypes.STRING,
      long: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
