const { User, Post_comment, sequelize } = require("../../models");
const { isAuthorized } = require("../token");

module.exports = {
  post: async (req, res) => {
    const { accessToken, user_id, postId, comment } = req.query;
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

    const newComment = await Post_comment.create({
      user_id: user_id,
      post_id: postId,
      comment: comment,
    });
    let commentArray;
    if (newComment) {
      const comment = await sequelize.query(
        `select Post_comments.id, Users.name, Post_comments.comment FROM Post_comments
      INNER JOIN Users ON Post_comments.user_id = Users.id
      WHERE Post_id = ${postId};`
      );
      commentArray = comment ? [...comment[0]] : [];
      // console.log(commentArray);
    }
    if (commentArray.length === 0) {
      // console.log("댓글을 작성하지 못했습니다");
      return res.status(204).send(commentArray);
    }

    return res.status(201).json(commentArray);
  },
  get: async (req, res) => {
    let postId = Number(req.query.postId);

    if (isNaN(postId)) {
      // console.log(`get요청에 포함된 postId가 ${typeof postId} type 입니다`); //만약 postId가 숫자가 아닐 경우
      return res.status(400).send("Not found post id");
    }

    const comment = await sequelize.query(
      `select Post_comments.id, Users.name, Post_comments.comment FROM Post_comments
    INNER JOIN Users ON Post_comments.user_id = Users.id
    WHERE Post_id = ${postId};`
    );

    const commentArray = [...comment[0]];
    // if (commentArray.length === 0) {
    //   console.log("댓글이 없습니다");
    // }

    return res.status(200).json(commentArray);
  },
  patch: async (req, res) => {
    const { accessToken, user_id, postId, comment_id, comment } = req.query;

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

    if (isNaN(Number(comment_id))) {
      // console.log(
      //   `get요청에 포함된 comment_Id가 ${typeof comment_id} type 입니다`
      // ); //만약 comment_Id가 숫자가 아닐 경우
      return res.status(400).send("Not found comment id");
    }

    const updateComment = await Post_comment.update(
      {
        comment: comment,
      },
      {
        where: { id: comment_id },
      }
    );

    let commentArray;
    if (updateComment) {
      const comment = await sequelize.query(
        `select Post_comments.id, Users.name, Post_comments.comment FROM Post_comments
      INNER JOIN Users ON Post_comments.user_id = Users.id
      WHERE Post_id = ${postId};`
      );
      commentArray = comment ? [...comment[0]] : [];
      // console.log(commentArray);
    }
    if (commentArray.length === 0) {
      // console.log("댓글을 수정할 수 없습니다");
      return res.status(204).send(commentArray);
    }

    return res.status(200).json(commentArray);
  },
  delete: async (req, res) => {
    const { accessToken, user_id, postId, comment_id } = req.query;

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

    if (isNaN(Number(comment_id))) {
      // console.log(
      //   `get요청에 포함된 comment_Id가 ${typeof comment_id} type 입니다`
      // ); //만약 comment_Id가 숫자가 아닐 경우
      return res.status(400).send("Not found comment id");
    }

    const deleteComment = await Post_comment.destroy({
      where: { id: comment_id, user_id, post_id: postId },
    });

    if (!deleteComment) {
      // console.log("댓글을 삭제할 수 없습니다");
      return res.status(204).end();
    }

    let commentArray;
    if (deleteComment) {
      const comment = await sequelize.query(
        `select Post_comments.id, Users.name, Post_comments.comment FROM Post_comments
      INNER JOIN Users ON Post_comments.user_id = Users.id
      WHERE Post_id = ${postId};`
      );
      commentArray = comment ? [...comment[0]] : [];
    }

    return res.status(200).json(commentArray);
  },
};
