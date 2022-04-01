const axios = require("axios");
const { User } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = {
  post: async (req, res) => {
    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {},
  kakao: async (req, res) => {
    const code = req.query.code;
    const tokenCall = await axios({
      url: "https://kauth.kakao.com/oauth/token",
      method: "POST",
      headers: {
        accept: "application/json",
      },
      params: {
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_CLIENT_ID,
        redirect_uri: "http://localhost:8080/user/signup/kakao",
        code: code,
        client_secret: process.env.KAKAO_CLIENT_SECRET,
      },
    });

    if (!tokenCall.data)
      return res.status(403).redirect("http://localhost:3000/");

    const accessToken = tokenCall.data.access_token;
    if (!accessToken) return res.status(403).redirect("http://localhost:3000/");

    function parseJwt(token) {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    }

    let idToken = tokenCall.data.id_token;
    const data = parseJwt(idToken);
    let id = "kakao.com/" + data.sub; //ID 토큰에 해당하는 사용자의 회원번호 : 카카오에서 제공하는 회원번호라서 유니크한 값이라고 판단했습니다

    let validation = await User.findOne({ where: { id } });
    if (validation) {
      // 만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
      // 로그인으로 다시 콜 불러라
    } else {
      User.create(
        {
          id,
          accessToken,
        },
        { fields: ["id", "accessToken"] }
      );
    }

    delete idToken;
    delete data;

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

    const tokenCall = await axios({
      url: "https://www.googleapis.com/oauth2/v4/token",
      method: "POST",
      headers: {
        accept: "application/json",
      },
      params: {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: "http://localhost:8080/user/signup/google",
        grant_type: "authorization_code",
      },
    });
    if (!tokenCall.data)
      return res.status(403).redirect("http://localhost:3000/");

    const accessToken = tokenCall.data.access_token;
    if (!accessToken) return res.status(403).redirect("http://localhost:3000/");

    function parseJwt(token) {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );

      return JSON.parse(jsonPayload);
    }

    let idToken = tokenCall.data.id_token;
    const data = parseJwt(idToken);

    let id = data.email;

    let validation = await User.findOne({ where: { id } });
    if (validation) {
      //만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
      //로그인으로 다시 콜 불러라
    } else {
      User.create(
        {
          id,
          accessToken,
        },
        { fields: ["id", "accessToken"] }
      );
    }

    delete idToken;
    delete data;

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

    const tokenCall = await axios({
      url: "https://github.com/login/oauth/access_token",
      method: "GET",
      headers: {
        accept: "application/json",
      },
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      },
    });

    const accessToken = tokenCall.data.access_token;
    if (!accessToken) return res.status(403).redirect("http://localhost:3000/");

    const userInfoCall = await axios({
      url: "https://api.github.com/user",
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `token ${accessToken}`,
      },
    });

    const id = userInfoCall.data.html_url.split("//")[1];

    let validation = await User.findOne({ where: { id } });
    if (validation) {
      //만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
      //로그인으로 다시 콜 불러라
    } else {
      User.create(
        {
          id,
          accessToken,
        },
        { fields: ["id", "accessToken"] }
      );
    }

    res
      .status(200)
      .cookie("accessToken", accessToken, {
        maxAge: 360000, //300초 뒤에 쿠키 사라짐
      })
      .cookie("cocodusId", id)
      .redirect("http://localhost:3000/userinforegister");
  },
};
