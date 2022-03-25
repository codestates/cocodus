module.exports = {
  get: async (req, res) => {
    console.log(req.headers.oauth_source); //Naver,Google,Kakaotalk
    res.status(200).send("test login");
  },
};
