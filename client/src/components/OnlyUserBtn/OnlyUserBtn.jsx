import React from "react";
import { UserBlock, Div } from "./OnlyUserBtn.styled";

function OnlyUserBtn(props) {
  return (
    <UserBlock>
      <Div>마감</Div>
      <Div>수정</Div>
      <Div>삭제</Div>
    </UserBlock>
  );
}

export default OnlyUserBtn;
