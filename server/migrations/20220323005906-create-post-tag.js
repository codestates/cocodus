"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Post_tags",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          unique: true,
        },
        post_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Posts",
            key: "id",
          },
        },
        tag_id: {
          type: Sequelize.STRING,
          // references: {
          //   model: "Tags",
          //   key: "id",
          // },
        },
      },
      {
        // 테이블 옵션
        timestamps: false,
        underscored: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Post_tags");
  },
};
