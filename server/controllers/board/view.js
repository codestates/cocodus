const { Post, User_view } = require("../../models");

module.exports = {
  get: async (req, res) => {
    let { isLogin, accessToken, cocodusId, nickName } = req.query;
    return res.status(200).send("");
  },
  post: async (req, res) => {
    let { isLogin, accessToken, cocodusId, nickName, post_id } = req.query;
    // cocodusId = "github+happy5happy5";
    if (isLogin === "true" && accessToken && cocodusId && nickName && post_id) {
      let view = await Post.findOne({
        where: { id: Number(post_id) },
        attributes: ["veiw_count"],
      }).then((x) => (x ? x.dataValues : false));

      let temp = await Post.update(
        {
          veiw_count: view.veiw_count + 1,
        },
        {
          where: { id: Number(post_id) },
        }
      );
      let temp2;
      let temp3 = await User_view.findOne({
        where: { user_id: cocodusId, post_id: Number(post_id) },
        attributes: ["user_id"],
      });
      if (!temp3) {
        temp2 = await User_view.create(
          {
            user_id: cocodusId,
            post_id: Number(post_id),
          },
          {
            fields: ["user_id", "post_id"],
          }
        );
      }
      return res.status(200).send(view);
    }
    if (isLogin === "false" && !accessToken && !nickName && post_id) {
      let view = await Post.findOne({
        where: { id: Number(post_id) },
        attributes: ["veiw_count"],
      }).then((x) => (x ? x.dataValues : false));

      let temp = await Post.update(
        {
          veiw_count: view.veiw_count + 1,
        },
        {
          where: { id: Number(post_id) },
        }
      );

      return res.status(200).send(view);
    }
  },
};
