// 글 등록, 수정하기 폼

import React, { useState } from "react";
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
  PlaceBox,
  PlaceInputBox,
} from "./Register.styled";
import LangOptTag from "../LangOptTag";
import KakaoMap from "../KakaoMap";
import { registerStore } from "../../Store/Register-zustand";

function Register() {
  // const [markerNow, setMarkerNow] = useState({});
  // const [place, setPlace] = useState("");
  const {
    inputs,
    tag,
    place,
    markerNow,
    placeName,
    roadAddress,
    chgInput,
    chgOnline,
    chgTag,
    chgMsg,
    chgPlace,
    chgMarker,
  } = registerStore();

  const { title, date, online } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    chgInput(name, value);
  };

  // 기술 스택 태그
  const onTagChange = (e) => {
    // console.log(e);
    const opts = e.map((el) => el.value);
    // console.log(opts);
    console.log(tag);
    chgTag(opts);
  };

  // 온라인 가능 여부
  const onCheckChange = (e) => {
    const { name, checked } = e.target;
    console.log(online);
    chgOnline(name, checked);
  };

  // 메세지
  const onMsgChange = (e) => {
    // console.log(e.blocks);
    let text = e.blocks.map((el) => el.text);
    console.log(text.join(" "));
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
          <Img src="UserIcon.png" />
          <InputBox
            type="text"
            defaultValue="김코딩"
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
          <LangOptTag onChange={onTagChange} />
        </FlexBox>
        <FlexBox>
          <Div>일시</Div>
          <InputBox
            name="date"
            type="datetime-local"
            value={date}
            onChange={onChange}
          />
          <Label>
            <CheckBox
              name="online"
              type="checkbox"
              id="online"
              onChange={onCheckChange}
              value={online}
            />
            온라인 가능
          </Label>
        </FlexBox>
        <TestEditorForm onChange={onMsgChange} />
      </Section>
      <PlaceBox>
        <Div>위치</Div>
        {console.log(markerNow)}
        <Div>
          <KakaoMap />

          <PlaceInputBox
            type="text"
            value={placeName}
            onChange={chgPlace}
            placeholder="상호명이 표시됩니다"
          />

          <div>
            <PlaceInputBox
              type="text"
              value={roadAddress}
              onChange={chgMarker}
              placeholder="도로명 주소가 표시됩니다"
            />
          </div>
        </Div>
      </PlaceBox>
    </>
  );
}

export default Register;
