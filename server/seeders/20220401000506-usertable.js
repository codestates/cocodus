"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // github+happy5happy5
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "github+happy5happy5",
          name: "윤종복",
          roadAddress: "서울 서대문구 오량길",
          location: "선선카페",
          lat: "37.5824163",
          long: "126.9996541",
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
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
