const models = require("../../models");
const { User } = require("../../models");
const axios = require("axios");
module.exports = {
  get: async (req, res) => {},
  post: async (req, res) => {
    // console.log(req.headers.oauth_source); //Naver,Google,Kakaotalk
    // console.log(models.User === User);
    let { email, password } = req.body.data || {};
    if (email && password) {
      User.create(
        {
          email,
          password,
          isAdmin: true,
        },
        { fields: ["email"] }
      );
    } else {
      //정보 더 필요합니다 잘못된거임다
    }
    res.status(200).send("test postlogin");
  },
};
