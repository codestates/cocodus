"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.hasMany(models.User_tag);
      Tag.hasMany(models.Post_tag);
    }
  }
  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        comment: "고유번호 UUID",
      },
      stack: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: false,
      modelName: "Tag",
    }
  );
  return Tag;
};
