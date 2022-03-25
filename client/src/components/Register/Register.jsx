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
import LangOptTag from "../LangOptTag";

function Register() {
  return (
    <>
      <Section>
        <Title type="text" placeholder="제목을 입력하세요" top="2rem" />
        <FlexBox>
          <Div>글쓴이</Div>
          <InputBox type="text" defaultValue="김코딩" width="15%" readOnly />
        </FlexBox>
        <FlexBox>
          <Div>사용 언어</Div>
          <LangOptTag />
        </FlexBox>
        <FlexBox>
          <Div>일시</Div>
          <InputBox type="datetime-local"></InputBox>
          <Label>
            <CheckBox type="checkbox" id="online" />
            온라인 가능
          </Label>
        </FlexBox>
        <TestEditorForm />
        <FlexBox top="2rem">
          <Div>위치</Div>
          <InputBox
            type="text"
            defaultValue="서울 서대문구 연희로 32 만동제과"
            readOnly
          />
        </FlexBox>
      </Section>
    </>
  );
}

export default Register;
