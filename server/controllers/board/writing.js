const { json } = require("stream/consumers");
const { User, Post, Post_tag } = require("../../models");

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
      res.status(403).send("not Authorized"); //id가 일치하지 않으므로 더이상 진행할 필요가 없습니다
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
    console.log(postId);
    // Post_tags에 created_at 컬럼이 없는데 자꾸 넣으라고 함 수정 필요
    await tag.map((element) => {
      Post_tag.create({
        post_id: postId,
        tag_id: element,
      });
    });

    res.status(201).end();
  },
};
