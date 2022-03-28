module.exports = {
  post: async (req, res) => {
    //let { email, password, nickname } = req.body.data;

    res.status(200).send("test signuppost");
  },
  get: async (req, res) => {
    //let { email, password, nickname } = req.body.data;
    // console.log(req.headers.oauth);
    // if (req.headers.oauth === "github") {
    //   res.status(200).send("github go");
    // } else {
    //   res.status(200).send("test signuppost");
    // }`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=http://localhost:8080/user/signup/github`
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;
    res.redirect(githubAuthUrl);
  },
  github: async (req, res) => {
    const axios = require("axios");

    const { session, query } = req;
    const { code } = query;
    //console.log(session, code);

    const test = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`
    );

    //console.log(test);
    //console.log(req);
    // if (!code) {
    //   res.status(401).end();
    // } else {
    //   res.status(200).send("성공");
    // }
    // 메소드는 POST
    // https://github.com/login/oauth/access_token
    // 필수 파라메더
    //client_id = .env에 있음 Required
    //client_secret = .env에 있음 Required
    //code 발급받은 code Required
    //redirectUrl Callback URL 있어야 함
    //state
    const tokenString = test.data;
    let accessToken = tokenString.split("&")[0].split("=")[1];
    console.log(accessToken);
    res
      .status(200)
      .cookie("accessToken", accessToken)
      // .send("토큰이가는지보고싶습니다")
      //.redirect("http://cocodus.site/");
      .redirect("http://localhost:3000");
  },
};
