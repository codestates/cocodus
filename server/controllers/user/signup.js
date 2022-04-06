const { User } = require("../../models");
const { generateAccessToken, isAuthorized } = require("../token");
const { findUserInfo } = require("../database");
module.exports = {
  post: async (req, res) => {
    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {},
  kakao: async (req, res) => {
    const code = req.query.code;
    let accessToken = await generateAccessToken(code, "kakao");
    let validation = await isAuthorized(accessToken, "kakao");
    let id;
    if (validation.id) {
      id = "kakao+" + validation.id;
    } else id = null;
    let temp = await findUserInfo(id);
    console.log(temp);
    let isMember = await User.findOne({ where: { id } });

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id);
    if (isMember) res.redirect("http://localhost:3000");
    else res.redirect("http://localhost:3000/userinforegister");
  },

  google: async (req, res) => {
    const code = req.query.code;
    if (!code) return res.status(401).redirect("http://localhost:3000/");
    let accessToken = await generateAccessToken(code, "google");
    let validation = await isAuthorized(accessToken, "google");
    let id;
    // console.log(validation);
    if (validation.email) id = "google+" + validation.email.split("@")[0];
    else id = null;
    let isMember = await User.findOne({ where: { id } });
    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //360초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id);
    if (isMember) res.redirect("http://localhost:3000");
    else res.redirect("http://localhost:3000/userinforegister");
  },

  github: async (req, res) => {
    const { code } = req.query;
    if (!code) return res.status(401).redirect("http://localhost:3000/");
    let accessToken = await generateAccessToken(code, "github");
    let validation = await isAuthorized(accessToken, "github");
    let id;
    if (validation) id = "github+" + validation.login;
    else id = null;
    let isMember = await User.findOne({ where: { id } });

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id);
    if (isMember) res.redirect("http://localhost:3000");
    else res.redirect("http://localhost:3000/userinforegister");
  },
};
