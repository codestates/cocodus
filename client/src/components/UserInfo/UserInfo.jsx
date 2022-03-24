// 회원 정보 폼 (닉네임, 관심언어)

import React from "react";
import { FlexBox, Div, InputBox } from "./UserInfo.styled";
import { Section } from "../styles/Section.styled";

function UserInfo(props) {
  const Languages = [
    "C",
    "C+",
    "C#",
    "Spring",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Vue.js",
    "Node.js",
    "Python",
    "Django",
    "GO",
    "Swift",
    "Kotlin",
    "Angular.js",
    "Ruby",
  ];

  return (
    <Section>
      <FlexBox>
        <Div>닉네임</Div>
        <InputBox type="text" placeholder="김코딩" width="15%" />
      </FlexBox>
      <FlexBox>
        <Div>관심 기술 태그</Div>
        <InputBox type="text" list="list" />
        <datalist id="list">
          {Languages.map((Lan, idx) => {
            return <option key={idx} value={Lan} />;
          })}
        </datalist>
      </FlexBox>
    </Section>
  );
}

export default UserInfo;
