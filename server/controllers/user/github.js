module.exports = {
  get: async (req, res) => {
    const { session, query } = req;
    const { code } = query;

    console.log(session, code);

    const url = `https://github.com/login/oauth/access_token?client_id={process.env.GITHUB_CLIENT_ID}&client_secret={$process.env.GITHUB_CLIENT_SECRET}&code={$code}`;
    try {
      const accessToken = await axios({
        method: "POST",
        url: url,
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(`response.data:${accessToken.data}`);
      let accessTokenSplit = accessToken.data.split("&")[0].split("=")[1];
      console.log(`access token:${accessTokenSplit}`);
      try {
        const userResponse = await axios({
          method: "GET",
          url: "https://api.github.com/user",
          headers: {
            Authorization: `token ${accessTokenSplit}`,
          },
        });
        console.log("social login result:", userResponse.data);
        //받아온 유저 데이터 저장하기
        users
          .findOrCreate({
            where: { email: userResponse.data.id },
            defaults: {
              password: hash(userResponse.data.node_id),
              githubId: userResponse.data.login,
              kind_login: "social",
            },
          })
          .then(([result]) => {
            session.userid = result.dataValues.id;
            console.log("session:", session);
            res.redirect("http://localhost:3000/");
          })
          .catch((err) => {
            console.log("err");
          });
      } catch (err) {
        res.status(500);
      }
    } catch (err) {
      return res.json(err.data);
    }
  },
};
