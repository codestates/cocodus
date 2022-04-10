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
    let id = validation;
    let isMember = await User.findOne({ where: { id } });
    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
        domain: ".cocodus.site",
      })
      .cookie("cocodusId", id, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
        domain: ".cocodus.site",
      });
    if (isMember && isMember.dataValues && isMember.dataValues.name)
      res.redirect("https://cocodus.site");
    else res.redirect("https://cocodus.site/userinforegister");
  },

  google: async (req, res) => {
    const code = req.query.code;
    if (!code) return res.status(401).redirect("https://cocodus.site");
    let accessToken = await generateAccessToken(code, "google");
    let validation = await isAuthorized(accessToken, "google");
    let id = validation;
    let isMember = await User.findOne({ where: { id } });
    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
        domain: ".cocodus.site",
      })
      .cookie("cocodusId", id, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
        domain: ".cocodus.site",
      });
    if (isMember) res.redirect("https://cocodus.site");
    else res.redirect("https://cocodus.site/userinforegister");
  },

  github: async (req, res) => {
    const { code } = req.query;
    if (!code) return res.status(401).redirect("https://cocodus.site");
    let accessToken = await generateAccessToken(code, "github");
    let validation = await isAuthorized(accessToken, "github");
    let id = validation;
    let isMember = await User.findOne({ where: { id } });
    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
        domain: ".cocodus.site",
      })
      .cookie("cocodusId", id, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
        domain: ".cocodus.site",
      });
    if (isMember) res.redirect("https://cocodus.site");
    else res.redirect("https://cocodus.site/userinforegister");
  },
};
