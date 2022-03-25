"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Users",
      {
        email: {
          type: Sequelize.STRING,
          primaryKey: true,
          unique: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        image: {
          type: Sequelize.STRING,
        },
        provider: {
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
    await queryInterface.dropTable("Users");
  },
};
