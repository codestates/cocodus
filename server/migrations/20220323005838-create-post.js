"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Posts",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          unique: true,
        },
        user_email: {
          type: Sequelize.STRING,
          references: {
            model: "Users",
            key: "email",
          },
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
          type: Sequelize.INTEGER,
        },
        total_like: {
          type: Sequelize.INTEGER,
        },
        total_comment: {
          type: Sequelize.INTEGER,
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
