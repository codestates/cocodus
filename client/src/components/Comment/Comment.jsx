// 댓글 창

import React from "react";
import { Section, Btn } from "../Register/Register.styled";
import { Text, DivBlock } from "./Comment.styled";

function Comment(props) {
  return (
    <Section top="6rem" width="100%">
      <DivBlock size="1.5rem">1개의 댓글이 있습니다.</DivBlock>
      <Text placeholder="댓글을 입력하세요" autoCapitalize="false"></Text>
      <Btn backColor="#000" color="#ffffff" float="right" top="1rem">
        댓글 등록
      </Btn>
    </Section>
  );
}

export default Comment;
