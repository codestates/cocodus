"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Posts",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        id: {
          type: Sequelize.STRING,
        },
        user_email: {
          type: Sequelize.STRING,
        },
        title: {
          type: Sequelize.STRING,
        },
        body: {
          type: Sequelize.STRING,
        },
        recruiting: {
          type: Sequelize.BOOLEAN,
        },
        veiw_count: {
          type: Sequelize.STRING,
        },
        total_like: {
          type: Sequelize.STRING,
        },
        total_comment: {
          type: Sequelize.STRING,
        },
        location: {
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
      },
      {
        // 테이블 옵션
        timestamps: true,
        underscored: true,
        paranoid: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
