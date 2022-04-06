module.exports = {
  // 내 정보에서 내가 쓴 모임 정보 모아보기로 조회하는 메시지
  get: async (req, res) => {
    //내가 쓴 모임 정보 게시물만 조회
    //헤더에 토큰하고 cocodusId를 담아서 보내주세요
    //{
    //   accessToken: accessToken,
    //   cocodusid: cocodusid}
    //}
    // 시퀄라이즈로 cocodusId로 조회해서 받아서 보내드리겠습니다
    {
      /*
      본문은(외부에 공개되도 상관 없는 내용들) Payload json
      [...{
        postId : 모임 정보 번호          
        tag: [공부할 언어],
        title: 모임 정보 제목
        meetingdate: 일시(모임시간)
        totalLike : 좋아요 수
        totalView: 조회수
        location: 상호명으로 바로 볼 수 있는 모임(위치)
        roadAddress: 도로명주소 (클라는 카멜로 보내주세요 db가 알아서 받겠습니다)
        }
      ]
      //위의 정보를 시퀄라이즈로 조회해서 '내가작성한모든모임정보변수' = [] 에다가 하나씩 요소로 추가
      //그다음 담아서 응답
     */
    }
    //위에서 조회한 내용을 json객체로 받음.
    res.status(200).send("내가작성한모든모임정보변수");
  },
};
