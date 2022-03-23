// 글 수정 페이지

import React from "react";
import ClickButton from "../components/ClickButton";
import Register from "../components/Register/Register";

function RegisterEditPage(props) {
  return (
    <>
      <Register />
      <ClickButton click1="삭제하기" click2="글 수정하기" />
    </>
  );
}

export default RegisterEditPage;
