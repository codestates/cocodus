"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "User_tags",
      {
        user_email: {
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
    await queryInterface.dropTable("User_tags");
  },
};
