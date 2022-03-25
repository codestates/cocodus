// 회원 정보 폼 (닉네임, 관심언어)

import React from "react";
import { FlexBox, Div, InputBox } from "./UserInfo.styled";
import { Section } from "../styles/Section.styled";
import LangOptTag from "../LangOptTag";

function UserInfo(props) {
  return (
    <Section>
      <FlexBox>
        <Div>닉네임</Div>
        <InputBox type="text" placeholder="김코딩" width="15%" />
      </FlexBox>
      <FlexBox>
        <Div>관심 기술 태그</Div>
        <LangOptTag />
      </FlexBox>
    </Section>
  );
}

export default UserInfo;
