const { User } = require("../../models");
const { saveUserInfo, findUserInfo } = require("../database");
const { isAuthorized } = require("../token");
module.exports = {
  get: async (req, res) => {
    let accessToken = req.query.accessToken;
    let id = req.query.cocodusId;
    let validation = await isAuthorized(accessToken, id.split("+")[0]);
    findUserInfo(validation).then((x) => console.log(x));
    // console.log(validation, "님이 로그인 하였습니다");
    if (validation) {
      let data = await findUserInfo(validation).then((x) =>
        x ? x.dataValues.name : x
      );
      res.status(200).send(data);
    } else res.status(404).send();
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
      // res.cookie("nickName", data.nickName);
      res.status(201).send({ message: "Successfully updated user infomation" });
    } else if (log === "create") {
      console.log("유저 정보가 없어서 새로 만듬");
      // res.cookie("nickName", data.nickName);
      res.status(201).send({ message: "Successfully saved user infomation" });
    }
  },
  delete: async (req, res) => {
    res.status(200).send("test userinfodelete");
  },
};
