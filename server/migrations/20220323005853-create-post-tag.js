"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Post_tags",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        post_id: {
          type: Sequelize.STRING,
        },
        tag_id: {
          type: Sequelize.STRING,
        },
      },
      {
        // 테이블 옵션
        timestamps: false,
        underscored: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Post_tags");
  },
};
