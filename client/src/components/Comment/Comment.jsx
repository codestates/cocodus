// 댓글 창

import React, { useRef } from "react";
import CommentList from "../CommentList/CommentList";
import { Section, Btn } from "../Register/Register.styled";
import { Text, DivBlock } from "./Comment.styled";
import { commentStore } from "../../Store/Comment-zustand";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { postData } from "../../Store/postData-zustand";
import axios from "axios";

function Comment() {
  const { specificdata } = postData();
  const nextId = useRef(1);
  const { chgMsg, inputs, addMsg } = commentStore();
  const onChange = (e) => {
    chgMsg(e.target.value);
  };
  const { accessToken, cocodusId } = accessTokenStore();
  // 댓글 등록
  const onCreate = async () => {
    const postId = specificdata[0].id;
    const comment = await axios({
      method: "POST",
      url: "http://localhost:8080/board/cmt",
      params: {
        accessToken,
        user_id: cocodusId,
        postId,
        comment: inputs,
      },
    });
    console.log(comment);
  };

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
