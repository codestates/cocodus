// 글 등록, 수정하기 폼

import React from "react";
import TestEditorForm from "../TestEditorForm";
import {
  Section,
  Title,
  Div,
  FlexBox,
  Img,
  InputBox,
  Label,
  CheckBox,
} from "./Register.styled";
import LangOptTag from "../LangOptTag";
import KakaoMap from "../KakaoMap";
import { registerStore } from "../../Store/Register-zustand";
import KakaoSearchBox from "../KakaoSearchBox/KakaoSearchBox";
import CalendarComponent from "../Calendar/CalendarComponent";
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";

function Register() {
  const { inputs, tag, chgInput, chgOnline, chgTag, chgMsg } = registerStore();
  const { nickName } = registerUserInfoStore();
  const { title, online } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    chgInput(name, value);
  };

  // 온라인 가능 여부
  const onCheckChange = (e) => {
    // console.log(e.target.checked);
    const { name, checked } = e.target;
    chgOnline(name, checked);
  };

  // 메세지
  const onMsgChange = (e) => {
    // console.log(e.blocks);
    let text = e.blocks.map((el) => el.text);
    // console.log(text.join(" "));
    text = text.join(" ");
    chgMsg(text);
  };
  return (
    <>
      <Section>
        <Title
          name="title"
          type="text"
          placeholder="제목을 입력하세요"
          top="2rem"
          onChange={onChange}
          value={title}
        />
        <FlexBox>
          <Img src="UserIcon7.png" />
          <InputBox
            type="text"
            value={nickName}
            width="15%"
            backColor="#fff"
            Border="none"
            fontSize="20px"
            focus
            readOnly
          />
        </FlexBox>
        <FlexBox>
          <Div>사용 언어</Div>
          <LangOptTag />
        </FlexBox>
        <FlexBox>
          <CalendarComponent />
          <Label>
            {online ? (
              <CheckBox
                name="online"
                type="checkbox"
                id="online"
                onChange={onCheckChange}
                checked
              />
            ) : (
              <CheckBox
                name="online"
                type="checkbox"
                id="online"
                onChange={onCheckChange}
              />
            )}
            온라인 가능
          </Label>
        </FlexBox>
        <TestEditorForm onChange={onMsgChange} />
        <KakaoSearchBox store={registerStore} />
        <KakaoMap store={registerStore} />
      </Section>
    </>
  );
}

export default Register;
