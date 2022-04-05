const axios = require("axios");
const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { generateAccessToken, isAuthorized } = require("../token");
module.exports = {
  post: async (req, res) => {
    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {},
  kakao: async (req, res) => {
    const code = req.query.code;
    let accessToken = await generateAccessToken(code, "kakao");
    console.log(accessToken);
    let validation = await isAuthorized(accessToken, "kakao");
    console.log(validation.data);
    // {
    //   id: 2188948465,
    //   expiresInMillis: 21599911,
    //   expires_in: 21599,
    //   app_id: 724604,
    //   appId: 724604
    // }
    let id = "kakao+" + validation.data.id; //ID 토큰에 해당하는 사용자의 회원번호 : 카카오에서 제공하는 회원번호라서 유니크한 값이라고 판단했습니다
    // let validation = await User.findOne({ where: { id } });
    // if (validation) {
    //   // 만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
    //   // 로그인으로 다시 콜 불러라
    // } else {
    //   User.create(
    //     {
    //       id,
    //       accessToken,
    //     },
    //     { fields: ["id", "accessToken"] }
    //   );
    // }

    // delete idToken;
    // delete data;

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id)
      .redirect("http://localhost:3000/userinforegister");
  },

  google: async (req, res) => {
    const code = req.query.code;
    if (!code) return res.status(401).redirect("http://localhost:3000/");
    let accessToken = await generateAccessToken(code, "google");
    console.log(accessToken);
    let validation = await isAuthorized(accessToken, "google");
    console.log(validation.data);
    let id = validation.data.email;
    // {
    //   issued_to: '286406699597-7mlmmmhid7n5dph3g3ce3s90do65bk4i.apps.googleusercontent.com',
    //   audience: '286406699597-7mlmmmhid7n5dph3g3ce3s90do65bk4i.apps.googleusercontent.com',
    //   user_id: '103390389205913746742',
    //   scope: 'https://www.googleapis.com/auth/userinfo.email openid',
    //   expires_in: 3598,
    //   email: 'zombil8731@gmail.com',
    //   verified_email: true,
    //   access_type: 'online'
    // }
    // let validation = await User.findOne({ where: { id } });
    // if (validation) {
    //   //만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
    //   //로그인으로 다시 콜 불러라
    // } else {
    //   User.create(
    //     {
    //       id,
    //       accessToken,
    //     },
    //     { fields: ["id", "accessToken"] }
    //   );
    // }

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //360초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id)
      .redirect("http://localhost:3000/userinforegister");
  },

  github: async (req, res) => {
    const { code } = req.query;
    if (!code) return res.status(401).redirect("http://localhost:3000/");
    let accessToken = await generateAccessToken(code, "github");
    // console.log(accessToken);
    let validation = await isAuthorized(accessToken, "github");
    // console.log(validation.data);
    let id = "github+" + validation.data.login;

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id)
      .redirect("http://localhost:3000/userinforegister");
  },
};
