const { User } = require("../../models");
const { saveUserInfo, findUserInfo, deleteUserInfo } = require("../database");
const { isAuthorized } = require("../token");
module.exports = {
  get: async (req, res) => {
    let accessToken = req.query.accessToken;
    let id = req.query.cocodusId;
    let validation = await isAuthorized(accessToken, id.split("+")[0]);
    // console.log(validation, "님이 로그인 하였습니다");
    if (validation) {
      let data = await findUserInfo(validation).then((x) =>
        x ? x.dataValues.name : x
      );
      res.status(200).send(data);
    } else res.status(404).send();
  },
  post: async (req, res) => {
    let data = req.query; //body로 오는 거 query로 수정했습니다
    if (!data) {
      // console.log("post::user/info error");
      return res.send({}); //바디에 정보가 없을때임
    }
    let log = await saveUserInfo(data);
    if (log === "update") {
      // console.log("유저 정보가 존재해서 정보를 업데이트함");
      // res.cookie("nickName", data.nickName);
      res.status(201).send({ message: "Successfully updated user infomation" });
    } else if (log === "create") {
      // console.log("유저 정보가 없어서 새로 만듬");
      // res.cookie("nickName", data.nickName);
      res.status(201).send({ message: "Successfully saved user infomation" });
    }
  },
  patch: async (req, res) => {
    const { user_id, name, image, roadAddress, location, long, lat } =
      req.query; //body로 오는 거 query로 수정했습니다
    const changeInfo = await User.update(
      {
        name,
        image,
        roadAddress,
        location,
        long,
        lat,
      },
      {
        where: { id: user_id },
      }
    );

    res.status(200).send("회원 정보가 변경되었습니다");
  },
  delete: async (req, res) => {
    let { cocodusId, accessToken, isLogin } = req.query;
    let validation = await isAuthorized(accessToken, cocodusId.split("+")[0]);
    if (!validation) return res.status(401).send();
    let temp = await deleteUserInfo(cocodusId);
    if (temp) res.status(201).send("deleted");

    // res.status(200).send("test userinfodelete");
  },
};
