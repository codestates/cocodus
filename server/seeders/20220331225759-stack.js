"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tags",
      [
        {
          stack: "c",
        },
        {
          stack: "c++",
        },
        {
          stack: "c#",
        },
        {
          stack: "spring",
        },
        {
          stack: "javascript",
        },
        {
          stack: "typescript",
        },
        {
          stack: "react",
        },
        {
          stack: "vue",
        },
        {
          stack: "node.js",
        },
        {
          stack: "python",
        },
        {
          stack: "django",
        },
        {
          stack: "go",
        },
        {
          stack: "swift",
        },
        {
          stack: "kotlin",
        },
        {
          stack: "angular",
        },
        {
          stack: "ruby",
        },
        {
          stack: "java",
        },
        {
          stack: "flutter",
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tags", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
