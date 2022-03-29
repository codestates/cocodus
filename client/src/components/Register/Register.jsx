// 글 등록, 수정하기 폼

import React, { useState } from "react";
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
  const [inputs, setInputs] = useState({
    title: "",
    date: "",
    online: false,
    address: "",
  });

  const { title, date, online, address } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 기술 스택 태그
  const [tag, setTag] = useState([]);

  const onTagChange = (e) => {
    e.map((el) => setTag([...tag, el.label]));
  };

  // 온라인 가능 여부
  const onCheckChange = (e) => {
    const { name, checked } = e.target;
    setInputs({
      ...inputs,
      [name]: checked,
    });
  };

  // 메세지
  const [content, setContent] = useState("");
  const onMsgChange = (e) => {
    // console.log(e.blocks);
    const text = e.blocks.map((el) => el.text);
    console.log(text.join(" "));
    setContent(text.join(" "));
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
          <Div>글쓴이</Div>
          <InputBox type="text" defaultValue="김코딩" width="15%" readOnly />
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
            />
            온라인 가능
          </Label>
        </FlexBox>
        <TestEditorForm onChange={onMsgChange} />
        <FlexBox top="2rem">
          <Div>위치</Div>
          <InputBox
            name="address"
            type="text"
            readOnly
            onChange={onChange}
            value={address}
          />
        </FlexBox>
      </Section>
    </>
  );
}

export default Register;
