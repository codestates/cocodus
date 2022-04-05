module.exports = {
  post: async (req, res) => {
    {
      /* 다 본문(바디)에 담아서 보내면 됩니다
      {
        accessToken: accessToken,
        cocodusid: cocodusid,
        tag: [
          사용 언어 최소 하나 이상(등록창에 경고창 만들 예정, 이것도 포함해주세요)
        ]
        online: 온라인 가능여부(새로운 변수), 불리언 기본값 false
        recruiting : 모집중
        lat: latitude Y
        long : longitude X
        jsonfile : 클라에서 작성한 정보를 그냥 통으로 json 형태로 저장(그대로 보내 주시면 그대로 받습니다)
     }
    */
    }
    const {
      accessToken,
      cocodusId,
      tag,
      online,
      recruiting,
      lat,
      long,
      jsonfile,
    } = req.body.data;

    //정보를통으로담은변수 에서 서버가 알아서 db에 맞춰서 저장하겠습니다
    //조회수는 기본값 0으로 자동 생성

    //만약에 클라에서 보낸 메시지가 잘못됐다면 정보가 부족한 것이므로
    //403 앤딩

    //정보가 다 잘 들어갔으면
    //db에서 방금 작성한 글의 id를 조회해야 함
    res.status(201);
    //글 작성이 완료되면 페이지 이동은 클라에서 메인으로
  },
};
