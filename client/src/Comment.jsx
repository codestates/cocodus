// 댓글 창

import React from "react";
import styled from "styled-components";
import { Div } from "./DetailContent";
import { Section, Btn } from "./Register.styled";

const Text = styled.textarea`
  background: rgba(196, 196, 196, 0.26);
  resize: none;
  display: block;
  font-family: inherit;
  padding: 1rem 1rem 1.5rem;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 100px;
  border: 1px solid #ced4da;
`;

function Comment(props) {
  return (
    <Section top="6rem" width="70%">
      <Div size="1.5rem">1개의 댓글이 있습니다.</Div>
      <Text placeholder="댓글을 입력하세요" autoCapitalize="false"></Text>
      <Btn backColor="#000" color="#ffffff" float="right" top="1rem">
        댓글 등록
      </Btn>
    </Section>
  );
}

export default Comment;
