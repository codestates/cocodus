module.exports = {
  patch: async (req, res) => {
    // 내가 쓴 모임 정보가 여러 이유로 더이상 사람을 모집하지 않을때 수정
    //req에 아래 내용이 다 들어가 있어야 합니다.
    {
      /*
      헤더에 담겨서 accessToken하고 cocodusid
      {accessToken: accessToken,
      cocodusid: cocodusid}
     
      본문은(외부에 공개되도 상관 없는 내용들) Payload json
      {
        postId : 모임 정보 번호
        recruiting : 모집중
     }
    */
    }
    // 이렇게 받으면, 서버에서 DB에 해당 내용을 postId로 조회해서 수정하겠습니다.
    // token하고 id하고 postId만 확인하면 됨
    // 저 세개가 잘못된 값일때만 403 응답
    // true면 모집, false면 마감

    //별도의 복잡한 응답이 필요 없습니다
    res.status(200).send("board yes recruiting patch");
  },
};
