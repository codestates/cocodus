// 댓글 등록 기능
import React, { useState } from "react";
import {
  Block,
  FlexBox,
  Img,
  UserName,
  CreatedAt,
  Msg,
  Input,
  BtnBlock,
  Btn,
} from "./CommentList.styled";
import { commentStore } from "../../Store/Comment-zustand";

function Comment({ comment }) {
  // 수정한 내용의 상태
  const [input, setInput] = useState("");
  // 클릭시 수정입력란 창
  const [visible, setVisible] = useState(false);
  const { removeMsg, updateMsg } = commentStore();
  const onRemove = (id) => {
    alert("삭제하시겠습니까?");
    removeMsg(id);
  };
  const onClick = () => {
    setInput(comment.msg);
    setVisible(true);
  };
  const onChange = (e) => {
    setInput(e.target.value);
  };
  // 엔터키를 입력시 수정 처리되는 함수
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      updateMsg(input, comment.id);
      setVisible(false);
      setInput("");
    }
  };
  return (
    <Block>
      <FlexBox>
        <Img src="UserIcon.png" alt="userimg" />
        <div>
          <UserName>김코딩</UserName>
          <CreatedAt>2022-03-25</CreatedAt>
        </div>
        <BtnBlock>
          <Btn onClick={onClick}>수정</Btn>
          <Btn onClick={() => onRemove(comment.id)}>삭제</Btn>
        </BtnBlock>
      </FlexBox>
      <Msg>
        {visible || input ? (
          <Input
            placeholder="수정을 하신 후 Enter 키를 입력하세요"
            value={input}
            onChange={onChange}
            onKeyDown={handleKeydown}
          />
        ) : (
          comment.msg
        )}
      </Msg>
    </Block>
  );
}

function CommentList() {
  const { commentList } = commentStore();
  return (
    <div>
      {commentList &&
        commentList.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
    </div>
  );
}

export default CommentList;
