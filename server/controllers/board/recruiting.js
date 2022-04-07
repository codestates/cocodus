const { Post } = require("../../models");

module.exports = {
  patch: async (req, res) => {
    const { accessToken, user_id, postId, recruiting } = req.body;
    //작성자만 고칠 수 있어야함
    // const onRecruiting =
    await Post.update(
      {
        recruiting,
      },
      {
        where: { id: postId, user_id },
      }
    );
    //별도의 복잡한 응답이 필요 없습니다
    return res.status(200).send("recruiting start || end");
  },
};
