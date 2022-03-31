const { User } = require("../../models");
module.exports = {
  get: async (req, res) => {
    res.status(200).send("test userinfoget");
  },
  patch: async (req, res) => {
    if (!req.body) return res.send({}); //바디에 정보가 없을때임
    if (!(req.body.name && req.body.id && req.body.accesstoken))
      return res.send({}); //바디에 name,id,accesstoken이 없으면 안됨
    const { id, accesstoken, name, roadAddress, placeName, x, y } = req.body;
    //여기에서 세션에 저장한 엑세스토큰 유효성 검사해야함
    let validation = await User.findOne({ where: { id, accesstoken } });
    if (validation) {
      User.update(
        {
          name,
          roadAddress,
          placeName,
          x,
          y,
        },
        {
          where: { id, accesstoken },
          fields: ["name", "roadAddress", "placeName", "x", "y"],
        }
      );

      return res.status(200).send("okay");
    } else return res.status(404).send("user dosen't exist");
  },
  delete: async (req, res) => {
    res.status(200).send("test userinfodelete");
  },
};
