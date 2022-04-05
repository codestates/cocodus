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
        title : 모임 제목
        tag: {
          사용 언어 최소 하나 이상(등록창에 경고창 만들 예정, 이것도 포함해주세요)
        }
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

    const 어떤변수 = req.headers.data;
    const 변수2 = req.body.data;

    //postMessage.어쩌구 시퀄라이저로 db에 응답하겠습니다
    //조회수는 기본값 0으로 자동 생성
    // 만약에 클라에서 보낸 메시지가 잘못됐다면 정보가 부족한 것이므로
    //403 앤딩

    //정보가 다 잘 들어갔으면
    //db에서 방금 작성한 글의 id를 조회해야 함
    res.status(200);
    //글 작성이 완료되면 페이지 이동은 클라에서 메인으로
  },
};
