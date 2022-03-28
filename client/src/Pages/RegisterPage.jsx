// 게시판 글 등록 페이지

import React from "react";
import ClickButton from "../components/ClickButton";
import Register from "../components/Register/Register";
import NavBar from "../components/NavBar/NavBar";

function RegisterPage(props) {
  return (
    <>
      <Register />
      <ClickButton click1="취소하기" click2="글 등록하기" />
    </>
  );
}

export default RegisterPage;
