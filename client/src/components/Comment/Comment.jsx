// 댓글 창

import React, { useRef, useState } from "react";
import CommentList from "../CommentList/CommentList";
import { Section, Btn } from "../Register/Register.styled";
import { Text, DivBlock } from "./Comment.styled";
import { commentStore } from "../../Store/Comment-zustand";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { postData } from "../../Store/postData-zustand";
import axios from "axios";

function Comment() {
  const { specificdata } = postData();
  const [cmtText, setCmtText] = useState("");
  const { setReload, cmtList } = commentStore();

  const { accessToken, cocodusId } = accessTokenStore();
  // 댓글 등록
  const onCreate = async () => {
    let comment;
    if (cmtText && specificdata[0].id && cocodusId && accessToken) {
      comment = await axios({
        method: "POST",
        url: "https://server.cocodus.site/board/cmt",
        params: {
          accessToken,
          user_id: cocodusId,
          postId: specificdata[0].id,
          comment: cmtText,
        },
      });
      if (comment.status === 201) {
        setCmtText("");
        setReload();
      }
    }
  };

  return (
    <Section top="6rem" width="100%">
      <DivBlock size="1.5rem">{cmtList.length}개의 댓글이 있습니다.</DivBlock>
      <Text
        type="text"
        placeholder="댓글을 입력하세요"
        onChange={(e) => setCmtText(e.target.value)}
        value={cmtText}
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
