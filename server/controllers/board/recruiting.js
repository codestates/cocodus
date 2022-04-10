const { Post } = require("../../models");

module.exports = {
  patch: async (req, res) => {
    const { accessToken, user_id, postId, recruiting } = req.query;
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

    if (isNaN(Number(postId))) {
      // console.log(`post 번호가 ${typeof postId} type 입니다`); //만약 postId가 숫자가 아닐 경우
      return res.status(400).send("Not found post id");
    }

    if (typeof recruiting !== "boolean") {
      return res.status(401).send("모집 여부가 잘못돼었습니다"); //전송값이 불리언이 아닙니다
    }

    const onRecruiting = await Post.update(
      {
        recruiting,
      },
      {
        where: { id: postId },
      }
    );
    if (!onRecruiting) {
      return res.status(401).send("상태를 변경할 수 없습니다"); //전송값이 불리언이 아닙니다
    }

    return res.status(200).send("recruiting start || end");
  },
};
