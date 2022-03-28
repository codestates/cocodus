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
    // }
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=http://localhost:8080/user/signup/github`;
    res.redirect(githubAuthUrl);
  },
};
