// 회원가입, 회원 정보 수정 등 상단 타이틀 폼

import React from "react";
import styled from "styled-components";
import { Section } from "./styles/Section.styled";

// 글 제목
export const Title = styled.div`
  width: 20%;
  margin-top: ${(props) => props.top};
  margin-bottom: 2rem;
  padding: 30px 0;
  font-size: 2rem;
  font-weight: 700;
  border: none;
`;

function TitleContent({ text, top }) {
  return (
    <Section width="60%">
      <Title top={top}>{text}</Title>
    </Section>
  );
}

export default TitleContent;
