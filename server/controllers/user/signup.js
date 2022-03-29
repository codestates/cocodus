module.exports = {
  post: async (req, res) => {
    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;
    res.redirect(githubAuthUrl);
  },
  github: async (req, res) => {
    const axios = require("axios");

    const { session, query } = req;
    const { code } = query;

    const test = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`
    );

    const tokenString = test.data;
    let accessToken = tokenString.split("&")[0].split("=")[1];
    console.log(accessToken);
    res
      .status(200)
      .cookie("accessToken", accessToken)
      .redirect("http://localhost:3000");
  },
};
