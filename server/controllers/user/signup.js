const axios = require("axios");
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {},
  google: async (req, res) => {
    // const tokenCall = await axios({
    //   url: "https://accounts.google.com/o/oauth2/v2/auth",
    //   method: "POST",
    //   headers: {
    //     accept: "application/json",
    //   },
    //   params: {
    //     client_id:
    //       "286406699597-7mlmmmhid7n5dph3g3ce3s90do65bk4i.apps.googleusercontent.com",
    //     client_secret: "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",
    //     response_type: "token",
    //     redirect_uri: "http://localhost:8080/user/signup/google",
    //     scope: "https://www.googleapis.com/auth/userinfo.email",
    //   },
    // });
    console.log(req);
    res.redirect("http://localhost:3000");

    //   res.redirect(
    //     "https://accounts.google.com/o/oauth2/v2/auth/?client_id=" +
    //       process.env.GOOGLE_CLIENT_ID +
    //       // "&client_secret=" +
    //       // process.env.GOOGLE_CLIENT_SECRET +
    //       "&response_type=token&redirect_uri=http://localhost:8080/user/signup/google" +
    //       "&scope=https://www.googleapis.com/auth/userinfo.email"
    //   );
    // } else {
    //   console.log(res);
    //   res.redirect("http://localhost:3000/");
    // }

    // res
    //   .status(200)
    //   .cookie("access_token", access_token, {
    //     maxAge: 300000, //300초 뒤에 쿠키 사라짐
    //   })
    //   //.redirect("http://cocodus.site/");
    // .redirect("http://localhost:3000/");
  },
  github: async (req, res) => {
    const { code } = req.query;
    if (!code) return res.status(401).redirect("http://localhost:3000/");
    const acctokenCall = await axios({
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
    // console.log(acctokenCall.data);
    const { access_token } = acctokenCall.data;
    if (!access_token)
      return res.status(403).redirect("http://localhost:3000/");
    const userInfoCall = await axios({
      url: "https://api.github.com/user",
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `token ${access_token}`,
      },
    });

    const id = userInfoCall.data.html_url;
    console.log(id); //https://github.com/happy5happy5
    let validation = await User.findOne({ where: { id } });
    if (validation) {
      //만약에 회원가입하는데 아이디가 있다면 여기서 뭔가 딴 짓을 해야한다.
    } else {
      User.create(
        {
          id,
          access_token,
        },
        { fields: ["id", "access_token"] }
      );
    }

    res
      .status(200)
      .cookie("access_token", access_token, {
        maxAge: 300000, //300초 뒤에 쿠키 사라짐
      })
      //.redirect("http://cocodus.site/");
      .redirect("http://localhost:3000/");
  },
};
