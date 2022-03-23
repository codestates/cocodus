// 글 수정 페이지

import React from "react";
import Button from "./Button";
import Register from "./Register";

function RegisterEditPage(props) {
  return (
    <>
      <Register />
      <Button click1="삭제하기" click2="글 수정하기" />
    </>
  );
}

export default RegisterEditPage;
