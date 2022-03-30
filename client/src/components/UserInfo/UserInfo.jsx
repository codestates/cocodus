// 회원 정보 폼 (닉네임, 관심언어)

import React from "react";
import { FlexBox, Div, InputBox } from "./UserInfo.styled";
import { Section } from "../styles/Section.styled";
import LangOptTag from "../LangOptTag";
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";
function UserInfo(props) {
  const { nickName, chgInput, chgTag } = registerUserInfoStore();

  // 닉네임 변경할 때,
  const onNickChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    chgInput(name, value);
  };

  // 기술 스택 태그
  const onTagChange = (e) => {
    // console.log(e);
    const opts = e.map((el) => el.value);
    console.log(opts);
    chgTag(opts);
  };

  return (
    <Section>
      <FlexBox>
        <Div>닉네임</Div>
        <InputBox
          name="nickName"
          type="text"
          placeholder="김코딩"
          width="15%"
          value={nickName}
          onChange={onNickChange}
        />
      </FlexBox>
      <FlexBox>
        <Div>관심 기술 태그</Div>
        <LangOptTag onChange={onTagChange} />
      </FlexBox>
    </Section>
  );
}

export default UserInfo;
