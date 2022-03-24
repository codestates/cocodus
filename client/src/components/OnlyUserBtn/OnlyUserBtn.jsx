import React from "react";
import { UserBlock, Div } from "./OnlyUserBtn.styled";
import { Button } from "../styles/Button.styled";

function OnlyUserBtn(props) {
  return (
    <UserBlock>
      <Button>마감</Button>
      <Button>수정</Button>
      <Button>삭제</Button>
    </UserBlock>
  );
}

export default OnlyUserBtn;
