const { User } = require("../../models");
module.exports = {
  get: async (req, res) => {
    res.status(200).send("test userinfoget");
  },
  post: async (req, res) => {
    let data;
    if (typeof req.body === "object") {
      data = JSON.parse(Object.keys(req.body)[0]);
    }
    if (!data) {
      console.log("post::user/info 에서 뭔가 잘못됬다 찾아라 이놈아");
      return res.send({}); //바디에 정보가 없을때임
    }
    if (!(data.name && data.id && data.accessToken)) return res.send({}); //바디에 name,id,accesstoken이 없으면 안됨
    const { id, accessToken, name, roadAddress, placeName, x, y } = data;
    //여기에서 세션에 저장한 엑세스토큰 유효성 검사해야함
    let validation = await User.findOne({ where: { id } });
    if (validation) {
      User.update(
        {
          name,
          roadAddress,
          accessToken,
          placeName,
          x,
          y,
        },
        {
          where: { id, accessToken },
          fields: ["name", "roadAddress", "placeName", "x", "y"],
        }
      );

      return res.status(201).send("okay");
    } else return res.status(404).send("user dosen't exist");
  },
  delete: async (req, res) => {
    res.status(200).send("test userinfodelete");
  },
};
