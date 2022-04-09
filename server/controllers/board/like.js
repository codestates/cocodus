const { User, Post, User_like } = require("../../models");

module.exports = {
  get: async (req, res) => {
    let { isLogin, accessToken, cocodusId, nickName, post_id } = req.query;
    let userLike = "0";
    if (isLogin && accessToken && cocodusId && nickName && post_id) {
      userLike = await User_like.findOne({
        where: { user_id: cocodusId, post_id: Number(post_id) },
        attributes: ["user_id", "post_id"],
      }).then((x) => (x ? 1 : 0));
      // if (temp) return res.status(200).send(temp);
    }
    let total_like = await Post.findOne({
      where: { id: Number(post_id) },
      attributes: ["total_like"],
    }).then((x) => (x.dataValues ? x.dataValues.total_like : "0"));

    res.status(200).send({ userLike, total_like });
  },
  post: async (req, res) => {
    let { isLogin, accessToken, cocodusId, nickName, post_id } = req.query;
    if (isLogin === "true" && accessToken && cocodusId && nickName && post_id) {
      // cocodusId = "github+happy5happy5";
      // let temp1 = await User.findOne({ where: { id: cocodusId } });
      let temp2 = await Post.findOne({
        where: { id: Number(post_id) },
        attributes: ["total_like"],
      }).then((x) => (x ? x.dataValues : false));
      let temp = await User_like.findOne({
        where: { user_id: cocodusId, post_id: post_id },
        attributes: ["user_id", "post_id"],
      });
      if (temp) {
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
