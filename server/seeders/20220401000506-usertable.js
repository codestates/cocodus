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
          roadAddress: "서울 종로구 대학로 11길 40",
          location: "카페선선혜화",
          lat: "37.5824487",
          long: "126.9996739",
        },
        {
          id: "github+sun-one95",
          name: "수닐",
          roadAddress: "서울 강남구 선릉로131길 11",
          location: "카페써드",
          lat: "37.5173923655247",
          long: "127.039862029236",
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
