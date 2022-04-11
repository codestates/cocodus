const { User, Post, Post_tag, Tag } = require("../../models");
const { isAuthorized } = require("../token");
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
      let temp = await Tag.findOne({
        where: { stack: el },
        attributes: ["id", "stack"],
      });
      // console.log(temp);
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

    res.status(201).end();
  },
  patch: async (req, res) => {
    const {
      accessToken,
      user_id,
      postId,
      tag,
      online,
      recruiting,
      lat,
      long,
      jsonfile,
    } = req.query;
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

    const updatePost = await Post.update(
      {
        jsonfile,
        recruiting,
        online,
        lat,
        long,
      },
      {
        where: { id: postId },
      }
    );

    if (!updatePost) {
      // console.log("모임 정보를 수정할 수 없습니다");
      return res.status(204).end();
    }

    const deleteTag = await Post_tag.destroy({ where: { post_id: postId } });
    // console.log(deleteTag);
    //여기서부터 149까지 태그생성 복붙
    const tagArray = [];

    for (el of tag) {
      let temp = await Tag.findOne({
        where: { stack: el },
        attributes: ["id", "stack"],
      });
      // console.log(temp);
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

    return res.status(200).send("모임 정보를 수정했습니다");
  },
  delete: async (req, res) => {
    const { accessToken, user_id, postId } = req.query;
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

    const deletePost = await Post.destroy({
      where: { id: postId },
    });

    if (!deletePost) {
      // console.log("모임 정보를 삭제할 수 없습니다");
      return res.status(204).end();
    }

    return res.status(200).send("모임 정보를 삭제했습니다");
  },
};
