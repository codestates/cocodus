const { User, Post } = require("../../models");
const { isAuthorized } = require("../token");
module.exports = {
  // 내 정보에서 내가 쓴 모임 정보 모아보기로 조회하는 메시지
  get: async (req, res) => {
    const { accessToken, user_id } = req.body;
    if (user_id) {
      const cocodusMember = await User.findOne({
        where: { id: user_id || "" },
      });
      const isMember = await isAuthorized(accessToken, user_id.split("+")[0]);
      if (!cocodusMember && !isMember)
        return res.status(401).send("not Authorized"); //id가 일치하지 않으므로 더이상 진행할 필요가 없습니다
    } else {
      return res.status(400).send("Bad Request");
    }

    let allPost = await Post.findAll({
      where: { user_id },
      attributes: [
        "id",
        "user_id",
        "jsonfile",
        "recruiting",
        "online",
        "veiw_count",
        "total_like",
      ],
    }).then((x) => (x ? x.map((y) => y.dataValues) : null));

    if (allPost) res.status(200).send(allPost);
    else res.status(204).send();
  },
};
