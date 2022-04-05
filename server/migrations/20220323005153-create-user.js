"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Users",
      {
        id: {
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
        accessToken: {
          type: Sequelize.STRING,
        },
        roadAddress: {
          type: Sequelize.STRING,
        },
        location: {
          type: Sequelize.STRING,
        },
        long: {
          type: Sequelize.STRING,
        },
        lat: {
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
