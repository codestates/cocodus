const { User } = require("../../models");
const { generateAccessToken, isAuthorized } = require("../token");
module.exports = {
  post: async (req, res) => {
    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {},
  kakao: async (req, res) => {
    const code = req.query.code;
    let accessToken = await generateAccessToken(code, "kakao");
    let validation = await isAuthorized(accessToken, "kakao");
    console.log(validation);
    // {
    //   id: 2188948465,
    //   expiresInMillis: 21599911,
    //   expires_in: 21599,
    //   app_id: 724604,
    //   appId: 724604
    // }

    let id = "kakao+" + validation.id; //ID 토큰에 해당하는 사용자의 회원번호 : 카카오에서 제공하는 회원번호라서 유니크한 값이라고 판단했습니다
    let isMember = await User.findOne({ where: { id } });

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id)
      .redirect(
        "http://localhost:3000" + !!isMember ? null : "/userinforegister"
      );
  },

  google: async (req, res) => {
    const code = req.query.code;
    if (!code) return res.status(401).redirect("http://localhost:3000/");
    let accessToken = await generateAccessToken(code, "google");
    let validation = await isAuthorized(accessToken, "google");
    let id;
    // console.log(validation);
    if (validation) id = "google+" + validation.email.split("@")[0];
    else id = null;
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
    // {
    //   "error": "invalid_token",
    //   "error_description": "Invalid Value"
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
    let validation = await isAuthorized(accessToken, "github");
    let id;
    if (validation) id = "github+" + validation.login;
    else id = null;

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id)
      .redirect("http://localhost:3000/userinforegister");
  },
};
