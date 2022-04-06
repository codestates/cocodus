const { sortDist } = require("../database");
const { User, Post, Post_tag } = require("../../models");
module.exports = {
  get: async (req, res) => {
    const id = "github+happy5happy5";
    const name = "윤종복";
    let userLoc = await User.findOne({
      where: { id },
      attributes: ["lat", "long"],
    });
    let postLoc = await sortDist(userLoc.dataValues);
    let result = [];
    for (let i = 0; i < postLoc.length; i++) {
      let temp = Post.findOne({
        where: { id: postLoc[i] },
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

    res.status(200).send(cal.map((x) => x.dataValues));
  },
};
