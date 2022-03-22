// 게시판 글 등록 페이지

import React from "react";
import Button from "./Button";
import Register from "./Register";

function RegisterPage(props) {
  return (
    <>
      <Register />
      <Button click1="취소하기" click2="글 등록하기" />
    </>
  );
}

export default RegisterPage;
