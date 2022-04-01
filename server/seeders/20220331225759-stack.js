"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tags",
      [
        {
          stack: "JS",
        },
        {
          stack: "TS",
        },
        {
          stack: "React",
        },
        {
          stack: "View",
        },
        {
          stack: "Node",
        },
        {
          stack: "Java",
        },
        {
          stack: "Spring",
        },
        {
          stack: "Kotlin",
        },
        {
          stack: "C",
        },
        {
          stack: "Go",
        },
        {
          stack: "Python",
        },
        {
          stack: "Django",
        },
        {
          stack: "Flutter",
        },
        {
          stack: "Swift",
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
