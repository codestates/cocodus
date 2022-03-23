'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    id: DataTypes.STRING,
    user_email: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    recruiting: DataTypes.BOOLEAN,
    veiw_count: DataTypes.STRING,
    total_like: DataTypes.STRING,
    total_comment: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};