const { User } = require("../../models");
const { saveUserInfo } = require("../database");
module.exports = {
  get: async (req, res) => {
    res.status(200).send("test userinfoget");
  },
  post: async (req, res) => {
    let data = req.body;
    if (!data) {
      console.log("post::user/info error");
      return res.send({}); //바디에 정보가 없을때임
    }
    let log = await saveUserInfo(data);
    if (log === "update") {
      console.log("유저 정보가 존재해서 정보를 업데이트함");
      res.status(201).send({ message: "Successfully updated user infomation" });
    } else if (log === "create") {
      console.log("유저 정보가 없어서 새로 만듬");
      res.status(201).send({ message: "Successfully saved user infomation" });
    }
  },
  delete: async (req, res) => {
    res.status(200).send("test userinfodelete");
  },
};
