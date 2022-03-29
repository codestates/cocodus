const axios = require("axios");
const { User } = require("../../models");

module.exports = {
  post: async (req, res) => {
    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {},
  github: async (req, res) => {
    const { code } = req.query;
    const test = await axios({
      url: "https://github.com/login/oauth/access_token",
      method: "POST",
      headers: {
        accept: "application/json",
      },
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      },
    });
    const { access_token } = test.data;
    const test2 = await axios({
      url: "https://api.github.com/user",
      method: "GET",
      headers: {
        accept: "application/json",
        authorization: `token ${access_token}`,
      },
    });
    //91889129
    console.log(test2.data.html_url); //happy5happy5
    // User.create(
    //   {
    //     id: test2.data.html_url,
    //     accesstoken: access_token,
    //   },
    //   { fields: ["id", "access_token"] }
    // );
    res
      .status(200)
      .cookie("access_token", access_token)
      .cookie("asdfadsf", 12341234)
      // .send("토큰이가는지보고싶습니다");
      //.redirect("http://cocodus.site/");
      .redirect("http://localhost:3000/");
  },
};
