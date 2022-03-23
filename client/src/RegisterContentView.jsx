// 게시판 상세글 조회

import React from "react";
import Comment from "./Comment";
import Register from "./Register";

function RegisterContentView(props) {
  return (
    <>
      {/* 만약 내가 이 글이 내가 작성한 글이라면 수정과 삭제 버튼이 있어야 한다 */}
      <Register readonly />
      <Comment />
    </>
  );
}

export default RegisterContentView;
