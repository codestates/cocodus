const { json } = require("stream/consumers");
const { User, Post, Post_tag } = require("../../models");

module.exports = {
  post: async (req, res) => {
    let {
      accessToken,
      cocodusId,
      tag,
      online,
      recruiting,
      lat,
      long,
      jsonfile,
    } = req.body;

    //여기에 accessToken 확인하는 과정 추가할 예정입니다

    cocodusId = "github+happy5happy5"; //임시로 만들었고 req.body에서 받아오는 변수는 const로 받아야 함

    const cocodusMember = await User.findOne({
      where: { id: cocodusId },
    });

    if (!cocodusMember) {
      res.status(403).send("not Authorized"); //id가 일치하지 않으므로 더이상 진행할 필요가 없습니다
    }

    const newPost = await Post.create({
      user_id: cocodusId,
      jsonfile: jsonfile,
      recruiting: recruiting,
      online: online,
      veiw_count: 0,
      total_like: 0,
      total_comment: 0,
      lat,
      long,
    });
    //숫자를 반올림을 해서 넣어주네...? 이거 해결해야 합니다

    let postId = newPost.dataValues.id;
    console.log(lat);
    console.log(long);
    console.log(tag);
    console.log(postId); //여기까지 작동 확인

    // tag.forEach((element) => {
    //   //여기는 더 효율적으로 만들고 싶은데 어떻게 해야할지 몰라서 일단 이렇게 구현했습니다.
    //   Post_tag.create({
    //     post_id: postId,
    //     tag_id: element,
    //   });
    // });

    //우리가 작성할 때는 post하고 post_tag에 입력을 하고
    //우리가 조회할 때는 post하고 tag를 조회하고 둘의 관계를 post_tag를 통해 유추합니다

    res.status(201).end();
    // res.status(201).json({ postId: postId });
  },
};
