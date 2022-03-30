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

      // let accessTokenSplit = accessToken.data.split("&")[0].split("=")[1];

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
      } catch (err) {
        res.status(500);
      }
    } catch (err) {
      return res.json(err.data);
    }
  },
};
