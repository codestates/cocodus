const { User, Post, User_like } = require("../../models");

module.exports = {
  get: async (req, res) => {
    res.status(200).send("test board like");
  },
  post: async (req, res) => {
    let { isLogin, accessToken, cocodusId, nickName, post_id } = req.query;
    if (isLogin && accessToken && cocodusId && nickName && post_id) {
      cocodusId = "github+happy5happy5";
      // let temp1 = await User.findOne({ where: { id: cocodusId } });
      let temp2 = await Post.findOne({
        where: { id: Number(post_id) },
        attributes: ["total_like"],
      }).then((x) => x.dataValues);

      if (
        await User_like.findOne({
          where: { user_id: cocodusId, post_id: post_id },
          attributes: ["user_id", "post_id"],
        })
      ) {
        await Post.update(
          {
            total_like: temp2.total_like - 1,
          },
          {
            where: { id: post_id },
          }
        );
        await User_like.destroy({
          where: { user_id: cocodusId, post_id: post_id },
        });
        return res.send("-1");
      } else {
        await Post.update(
          {
            total_like: temp2.total_like + 1,
          },
          {
            where: { id: post_id },
          }
        );
        await User_like.create(
          {
            user_id: cocodusId,
            post_id: Number(post_id),
          },
          {
            fields: ["user_id", "post_id"],
          }
        );
        return res.send("+1");
      }
    }
  },
};
