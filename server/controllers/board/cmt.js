const { User, Post_comment, sequelize } = require("../../models");

module.exports = {
  post: async (req, res) => {
    console.log(req.query);
    const { accessToken, user_id, postId, comment } = req.query;

    const cocodusMember = await User.findOne({
      where: { id: user_id },
    });
    if (!cocodusMember) {
      return res.status(401).send("not Authorized"); //id가 일치하지 않으므로 더이상 진행할 필요가 없습니다
    }

    if (isNaN(Number(postId))) {
      console.log(`post 번호가 ${typeof postId} type 입니다`); //만약 postId가 숫자가 아닐 경우
      return res.status(400).send("Not found post id");
    }

    //const newComment =
    await Post_comment.create({
      user_id: user_id,
      post_id: postId,
      comment: comment,
    });

    res.status(201).end();
  },
  get: async (req, res) => {
    let postId = Number(req.query.postId);

    if (isNaN(postId)) {
      console.log(`get요청에 포함된 postId가 ${typeof postId} type 입니다`); //만약 postId가 숫자가 아닐 경우
      return res.status(400).send("Not found post id");
    }

    const comment = await sequelize.query(
      `select Post_comments.id, Users.name, Post_comments.comment FROM Post_comments
    INNER JOIN Users ON Post_comments.user_id = Users.id
    WHERE Post_id = ${postId};`
    );

    const commentArray = [...comment[0]];
    console.log(commentArray);
    if (commentArray.length === 0) {
      console.log("댓글이 없습니다");
      return res.status(200).send("no comments in this post");
    }

    return res.status(200).json(commentArray);
    // res.status(200).end();
  },
  patch: async (req, res) => {
    const { accessToken, user_id, comment_id, comment } = req.query;
    //여기에 accessToken 확인하는 과정 추가할 예정입니다

    const cocodusMember = await User.findOne({
      where: { id: user_id },
    });
    if (!cocodusMember) {
      return res.status(401).send("not Authorized"); //id가 일치하지 않으므로 더이상 진행할 필요가 없습니다
    }

    if (isNaN(Number(comment_id))) {
      console.log(
        `get요청에 포함된 comment_Id가 ${typeof comment_id} type 입니다`
      ); //만약 postId가 숫자가 아닐 경우
      return res.status(400).send("Not found comment id");
    }

    // const newComment =
    await Post_comment.update(
      {
        comment: comment,
      },
      {
        where: { id: comment_id },
      }
    );

    res.status(201).end();
  },
  delete: async (req, res) => {
    const { accessToken, user_id, comment_id, postId } = req.body;
    //여기에 accessToken 확인하는 과정 추가할 예정입니다

    const cocodusMember = await User.findOne({
      where: { id: user_id },
    });

    if (!cocodusMember) {
      return res.status(401).send("not Authorized"); //id가 일치하지 않으므로 더이상 진행할 필요가 없습니다
    }
    // const deleteComment =
    await Post_comment.destroy({
      where: { id: comment_id, user_id, post_id: postId },
    });

    res.status(200).end();
  },
};
