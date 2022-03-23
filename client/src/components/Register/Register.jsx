// 글 등록, 수정하기 폼

import React from "react";
import TestEditorForm from "../TestEditorForm";

import {
  Section,
  Title,
  Div,
  FlexBox,
  InputBox,
  Label,
  CheckBox,
} from "./Register.styled";

function Register() {
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
    <>
      <Section>
        <Title type="text" placeholder="제목을 입력하세요" />
        <FlexBox>
          <Div>글쓴이</Div>
          <InputBox type="text" value="김코딩" width="15%" />
        </FlexBox>
        <FlexBox>
          <Div>사용 언어</Div>
          <InputBox type="text" list="list" ri="1rem" />
          {/* {hashArr.map((el) => {
          return <div>{el}</div>;
        })} */}
          <datalist id="list">
            {Languages.map((Lan, idx) => {
              return <option key={idx} value={Lan} />;
            })}
          </datalist>
          <Label>
            <CheckBox type="checkbox" id="online" />
            온라인 가능
          </Label>
        </FlexBox>
        <FlexBox>
          <Div>일시</Div>
          <InputBox type="datetime-local"></InputBox>
        </FlexBox>
        <TestEditorForm />
        <FlexBox top="2rem">
          <Div>위치</Div>
          <InputBox type="text" value="서울 서대문구 연희로 32 만동제과" />
        </FlexBox>
      </Section>
    </>
  );
}

export default Register;
