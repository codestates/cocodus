module.exports = {
  // 모임 정보 작성은 writing으로 따로 빠져 있음
  get: async (req, res) => {
    //모임 정보 조회
    // req에 이 정보를 담아서 보내주세요
    //{postId : 조회할 모임 정보의 번호}
    // 시퀄라이즈로 아래 정보를 db에서 조회해서 받아서 보내드리겠습니다
    {
      /*본문은(외부에 공개되도 상관 없는 내용들) Payload json
    {
      postId : 모임 정보 번호
      name : 작성자 닉네임
      title : 모임 정보 제목
      createdAt : 작성 일자
      tag: [
        사용 언어 최소 하나 이상(등록창에 경고창 만들 예정, 이것도 포함해주세요)
      ]
      meetingdate: 일시(모임시간)
      online: 온라인 가능여부(새로운 변수), 불리언 기본값 false
      recruiting : 모집중
      body : 본문
      location: 상호명으로 바로 볼 수 있는 모임(위치)
      roadAddress: 도로명주소 (클라는 카멜로 보내주세요 db가 알아서 받겠습니다)
      lat: latitude Y
      long : longitude X
      totalLike : 좋아요 수
      totalView: 조회수
      comments: [...{
        commentId : 댓글 아이디(표시할 값은 아닙니다 구분 위해서 보내드림 정렬할때 쓰셔도 될듯?)
        commentName: 댓글 작성자
        commentBody: 댓글 내용
      }]
   }
   */
    }
    //위에서 조회한 내용을 json객체로 받음.
    res.status(200).send("json으로 변환한 모임 정보에 들어갈 모든 정보");
  },
  patch: async (req, res) => {
    // 내가 쓴 모임 정보 수정
    // 보내는 정보 받는 정보가 양쪽 다 매우 많음
    //req에 아래 내용이 다 들어가 있어야 합니다.
    {
      /*
      헤더에 담겨서 accessToken하고 cocodusid
      {accessToken: accessToken,
      cocodusid: cocodusid}
     
      본문은(외부에 공개되도 상관 없는 내용들) Payload json
      {
        postId : 모임 정보 번호
        title : 모임 제목
        tag: [
          사용 언어 최소 하나 이상(등록창에 경고창 만들 예정, 이것도 포함해주세요)
        ]
        meetingdate: 일시(모임시간)
        online: 온라인 가능여부(새로운 변수), 불리언 기본값 false
        recruiting : 모집중
        body : 본문
        location: 상호명으로 바로 볼 수 있는 모임(위치)
        roadAddress: 도로명주소 (클라는 카멜로 보내주세요 db가 알아서 받겠습니다)
        lat: latitude Y
        long : longitude X
     }
    */
    }
    // 이렇게 받으면, 서버에서 DB에 해당 내용을 postId로 조회해서 수정하겠습니다.
    // token하고 id하고 postId만 확인하면 됨
    // 저 세개가 잘못된 값일때만 403 응답
    // 나머지 경우는 값이 언디파인드나 null이면 수정을 안하면 됩니다.

    //수정이 잘 된 경우 200으로 응답(따로 서버에서 db에 다시 조회할 필요가 없다고 판단했습니다. 클라이언트에 states로 저장이 되어 있기 때문
    res.status(200).send("board yes list patch");
  },
  delete: async (req, res) => {
    // 내가 쓴 모임 정보 삭제
    //회원 여부를 확인할 수 있는 정보와 삭제할 모임 정보 id만 있으면 db에 삭제하라고 시킬 수 있습니다
    {
      /*
      헤더에 담겨서 accessToken하고 cocodusid
      {accessToken: accessToken,
      cocodusid: cocodusid}
     
      본문은(외부에 공개되도 상관 없는 내용들) Payload json
      {
        postId : 모임 정보 번호
      }
      */
    }
    //시퀄라이즈로 db에서 삭제
    //삭제됐다고 응답해줌(삭제하면 클라이언트에서 알아서 메인으로 보내줌)
    //프론트에서 삭제 알림창 추가 작업하셔야 될 수도 있어요
    res.status(200).send("board yes list delete");
  },
};
