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

    Post.create({
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

    let postId = 0; //위에서 입력한 post_id를 받아와야 하는데 어떻게 받아오면 좋을까요? > id로 조회하되 제일 최근에 쓴
    let newPost = await Post.findAll({
      where: { jsonfile: jsonfile },
    });

    // console.log(newPost);

    // tag.forEach((element) => {
    //   //tag 배열이 최소 하나의 언어를 반드시 가진 상태로 클라이언트에서 전송되므로 실행이 확실합니다.
    //   Post_tag.create({
    //     post_id: postId,
    //     tag_id: element,
    //   });
    // });

    res.status(201).end();
    // res.status(201).json({ postId: postId });
  },
};
