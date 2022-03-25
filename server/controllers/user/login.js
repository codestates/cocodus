module.exports = {
  post: async (req, res) => {
    // console.log(req.headers.oauth_source); //Naver,Google,Kakaotalk
    let { email, password } = req.body.data;
    if (email && password) {
      //여기서 디비에서 검색
    } else {
      //정보 더 필요합니다 잘못된거임다
    }
    res.status(200).send("test login");
  },
};
