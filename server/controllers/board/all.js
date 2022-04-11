const { sortDist } = require("../database");
const { User, Post, Post_tag, User_like, User_view } = require("../../models");
module.exports = {
  get: async (req, res) => {
    let {
      isLogin,
      accessToken,
      cocodusId,
      nickName,
      howMany,
      km,
      mylike,
      mypost,
      myread,
    } = req.query;
    if (myread === "true" && cocodusId) {
      // cocodusId = "github+happy5happy5";
      let temp = await User_view.findAll({
        where: { user_id: cocodusId },
        attributes: ["post_id"],
      });
      let result = [];
      if (temp.length) {
        temp.map((x) => {
          result.push(
            Post.findOne({
              where: { id: x.post_id },
              attributes: [
                "id",
                "user_id",
                "jsonfile",
                "recruiting",
                "online",
                "veiw_count",
                "total_like",
              ],
            })
          );
        });
      }
      let temp2 = await Promise.all(result);
      return res
        .status(200)
        .send(temp2.filter((x) => x).map((x) => x.dataValues));
    }
    if (mylike === "true" && cocodusId) {
      // cocodusId = "github+happy5happy5";
      let temp = await User_like.findAll({
        where: { user_id: cocodusId },
        attributes: ["post_id"],
      });
      let result = [];
      if (temp.length) {
        temp.map((x) => {
          result.push(
            Post.findOne({
              where: { id: x.post_id },
              attributes: [
                "id",
                "user_id",
                "jsonfile",
                "recruiting",
                "online",
                "veiw_count",
                "total_like",
              ],
            })
          );
        });
      }
      let temp2 = await Promise.all(result);
      return res
        .status(200)
        .send(temp2.filter((x) => x).map((x) => x.dataValues));
    }
    if (mypost === "true" && cocodusId) {
      // cocodusId = "github+happy5happy5";
      let temp = await User_view.findAll({
        where: { user_id: cocodusId },
        attributes: ["post_id"],
      });
      let result = [];
      if (temp.length) {
        temp.map((x) => {
          result.push(
            Post.findOne({
              where: { id: x.post_id },
              attributes: [
                "id",
                "user_id",
                "jsonfile",
                "recruiting",
                "online",
                "veiw_count",
                "total_like",
              ],
            })
          );
        });
      }
      let temp2 = await Promise.all(result);
      return res
        .status(200)
        .send(temp2.filter((x) => x).map((x) => x.dataValues));
    }
    if (isLogin === "true" && accessToken && cocodusId && nickName) {
      let userLoc = await User.findOne({
        where: { id: cocodusId },
        attributes: ["lat", "long"],
      });
      if (!userLoc) {
        return res.status(404).send([]);
      }
      let postLoc = await sortDist(userLoc.dataValues, km);
      let result = [];
      for (let i = 0; i < postLoc.length; i++) {
        let temp = Post.findOne({
          where: { id: postLoc[i], recruiting: "1" },
          attributes: [
            "id",
            "user_id",
            "jsonfile",
            "recruiting",
            "online",
            "veiw_count",
            "total_like",
          ],
        });
        result.push(temp);
      }
      let cal = await Promise.all(result);
      return res.status(200).send(
        cal
          .filter((x, i) =>
            i >= howMany[0] && i < howMany[0] + howMany[1] ? true : false
          )
          .filter((x) => x)
          .map((x, i) => {
            return {
              id: postLoc[i],
              jsonfile: x.dataValues.jsonfile,
              user_id: x.dataValues.user_id,
              recruiting: x.dataValues.recruiting,
              online: x.dataValues.online,
              veiw_count: x.dataValues.veiw_count,
              total_like: x.dataValues.total_like,
            };
          })
      );
    }
    if (isLogin === "false" && !accessToken && !nickName) {
      let temp = await Post.findAll({
        where: { recruiting: "1" },
        attributes: [
          "id",
          "user_id",
          "jsonfile",
          "recruiting",
          "online",
          "veiw_count",
          "total_like",
        ],
        offset: Number(howMany[0]) || 0,
        limit: Number(howMany[1]),
        subQuery: false,
      });

      return res.status(200).send(temp);
    }
    res.status(204).send(null);
  },
};
