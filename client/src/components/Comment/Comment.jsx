// 댓글 창

import React, { useState, useRef } from "react";
import CommentList from "../CommentList/CommentList";
import { Section, Btn } from "../Register/Register.styled";
import { Text, DivBlock } from "./Comment.styled";
import { commentStore } from "../../Store/Comment-zustand";

function Comment(props) {
  const nextId = useRef(1);
  const { chgMsg, inputs, addMsg } = commentStore();
  const onChange = (e) => {
    chgMsg(e.target.value);
  };

  const onCreate = () => {
    addMsg(inputs, nextId.current);
    nextId.current += 1;
  };

  // const onUpdate = () => {
  //   updateMsg(inputs, id);
  // };
  // const handleKeyPress = (e) => {
  //   if (e.keyCode === 13) {
  //     onCreate();
  //   }
  // };
  return (
    <Section top="6rem" width="100%">
      <DivBlock size="1.5rem">1개의 댓글이 있습니다.</DivBlock>
      <Text
        type="text"
        placeholder="댓글을 입력하세요"
        onChange={onChange}
        value={inputs}
      ></Text>
      <Btn
        backColor="#000"
        color="#ffffff"
        float="right"
        top="1rem"
        onClick={onCreate}
      >
        댓글 등록
      </Btn>
      <CommentList />
    </Section>
  );
}

export default Comment;
