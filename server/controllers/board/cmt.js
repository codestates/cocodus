module.exports = {
  post: async (req, res) => {
    {
      /*
     보낼 때 : 쿠키에 담겨서 accessToken하고 cocodusid
     cookie에서
      {accessToken: accessToken,
      cocodusid: cocodusid}
     
      본문은(외부에 공개되도 상관 없는 내용들) Payload json
      {
        postId: 원래 글 번호
        comment : 댓글 내용
      }
    */
    }

    const 토큰하고아이디받는변수 = req.headers.data;
    const 댓글내용받는변수 = req.body.data;

    //시퀄라이즈 db에 생성
    //생성할 때 코멘트 아이디 넣어야 합니다(코멘트만 조회하거나 삭제할 때 필요)
    // 만약에 클라에서 정보가 부족하게 왔으면
    //403 응답

    //정보가 다 잘 들어갔으면
    //db에서 방금 작성한 글의 id를 조회해야 함
    res.status(201);
    //글 작성이 완료되면 페이지 이동은 없고 댓글이 바로 보여야함
  },
  patch: async (req, res) => {
    {
      /*
     보낼 때 : 쿠키에 담겨서 accessToken하고 cocodusid
     cookie에서
      {accessToken: accessToken,
      cocodusid: cocodusid}
     
      본문은(외부에 공개되도 상관 없는 내용들) Payload json
      {
        postId: 원래 글 번호  
        commentId : 
        comment : 댓글 내용
      }
    */
    }

    const 토큰하고아이디받는변수 = req.headers.data;
    const 댓글내용받는변수 = req.body.data;

    //정보가 맞으면 시퀄라이즈로 db에 해당 내용을 수정
    //만약에 클라에서 정보가 부족하게 왔으면
    //403 응답

    //잘 수정됐으면
    res.status(200);
    //글 작성이 완료되면 페이지 이동은 없고 댓글이 바로 보여야함
  },
  delete: async (req, res) => {
    {
      /*
     보낼 때 : 쿠키에 담겨서 accessToken하고 cocodusid
     cookie에서
      {accessToken: accessToken,
      cocodusid: cocodusid}
     
      본문은(외부에 공개되도 상관 없는 내용들) Payload json
      {
        postId: 원래 글 번호
        commentId : 댓글 번호
      }
    */
    }

    const 토큰하고아이디받는변수 = req.headers.data;

    //정보가 맞으면 시퀄라이즈로 db에 해당 댓글을 삭제
    //만약에 클라에서 정보가 부족하게 왔으면
    //403 응답

    //잘 삭제됐으면
    res.status(200).send("board yes cmt delete");
    //글 작성이 완료되면 페이지 이동은 없고 댓글이 바로 보여야함
  },
};
