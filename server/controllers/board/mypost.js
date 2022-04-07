const { User, sequelize } = require("../../models");

module.exports = {
  // 내 정보에서 내가 쓴 모임 정보 모아보기로 조회하는 메시지
  get: async (req, res) => {
    const { accessToken, user_id } = req.body;

    const cocodusMember = await User.findOne({
      where: { id: user_id },
    });
    if (!cocodusMember) {
      return res.status(403).send("not Authorized"); //id가 일치하지 않으므로 더이상 진행할 필요가 없습니다
    }

    const dataArray = await sequelize.query(
      `select id, jsonfile, recruiting, online, veiw_count, total_comment FROM Posts WHERE user_id = '${user_id}';`
    );

    const allPost = [...dataArray[0]];
    res.status(200).json(allPost);
  },
};
