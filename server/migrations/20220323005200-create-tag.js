"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Tags",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
        },
        stack: {
          type: Sequelize.STRING,
        },
      },
      {
        // 테이블 옵션
        timestamps: false,
        underscored: true,
        createdAt: false,
        updatedAt: false,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tags");
  },
};
