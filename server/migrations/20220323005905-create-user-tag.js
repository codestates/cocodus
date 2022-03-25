"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "User_tags",
      {
        user_email: {
          type: Sequelize.STRING,
          references: {
            model: "Users",
            key: "email",
          },
        },
        tag_id: {
          type: Sequelize.UUID,
          references: {
            model: "Tags",
            key: "id",
          },
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
