const axios = require("axios");
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
    console.log(test2.data); //happy5happy5

    // 깃허브 아이디랑 뭐 필요한정보 다 받아온다.
    // 로그인엔드포인트 가져온다 여기로
    // 디비에 acc저장하고 email저장하고 name

    res
      .status(200)
      .cookie("access_token", access_token)
      .cookie("hey", test2.data.login)

      // .send("토큰이가는지보고싶습니다");
      //.redirect("http://cocodus.site/");
      .redirect("http://localhost:3000/");
  },
};
