"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Post_comments", {
      user_email: {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "email",
        },
      },
      post_id: {
        type: Sequelize.UUID,
        references: {
          model: "Posts",
          key: "id",
        },
      },
      comment: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Post_comments");
  },
};
