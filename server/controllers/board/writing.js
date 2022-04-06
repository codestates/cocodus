const { json } = require("stream/consumers");
const { User, Post, Post_tag, Tag } = require("../../models");

module.exports = {
  post: async (req, res) => {
    const {
      accessToken,
      user_id,
      tag,
      online,
      recruiting,
      lat,
      long,
      jsonfile,
    } = req.body;
    //여기에 accessToken 확인하는 과정 추가할 예정입니다

    const cocodusMember = await User.findOne({
      where: { id: user_id },
    });

    if (!cocodusMember) {
      return res.status(403).send("not Authorized"); //id가 일치하지 않으므로 더이상 진행할 필요가 없습니다
    }

    const newPost = await Post.create({
      user_id: user_id,
      jsonfile: jsonfile,
      recruiting: recruiting,
      online: online,
      veiw_count: 0,
      total_like: 0,
      total_comment: 0,
      lat,
      long,
    });

    let postId = newPost.dataValues.id;

    const tagArray = [];

    for (el of tag) {
      let temp = Tag.findOne({
        where: { stack: el },
        attributes: ["id", "stack"],
      });
      tagArray.push(temp);
    }
    let getTagId = await Promise.all(tagArray);

    const tagId = getTagId.map((el) => el.dataValues.id);

    let result = [];
    for (el of tagId) {
      let temp = await Post_tag.create(
        {
          post_id: postId,
          tag_id: el,
        },
        {
          fields: ["post_id", "tag_id"],
        }
      );
      result.push(temp);
    }
    // console.log(result);

    res.status(201).end();
  },
};
