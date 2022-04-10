"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Posts",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          unique: true,
        },
        user_id: {
          type: Sequelize.STRING,
          references: {
            model: "Users",
            key: "id",
          },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
        jsonfile: {
          type: Sequelize.JSON,
        },
        recruiting: {
          type: Sequelize.BOOLEAN,
        },
        online: {
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
        lat: {
          type: Sequelize.STRING,
        },
        long: {
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
