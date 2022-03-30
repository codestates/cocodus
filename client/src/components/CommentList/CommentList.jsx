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
import { commentModalStore } from "../../Store/Modal-zustand";
import { updateCommentStore } from "../../Store/UpdateComment-zustand";
import DeleteModal from "../DeleteRegisterSubModal/DeleteModal";
import Modal from "../Modal/Modal";

function Comment({ comment }) {
  const { input, visible, visibleOpen, visibleClose, chgInput } =
    updateCommentStore();
  // 모달
  const { modalOpen, openModal, closeModal } = commentModalStore();

  const { updateMsg } = commentStore();

  // 수정 버튼 클릭시
  const onClick = () => {
    chgInput(comment.msg);
    visibleOpen();
  };
  const onChange = (e) => {
    chgInput(e.target.value);
  };
  // 엔터키를 입력시 수정 처리되는 함수
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      updateMsg(input, comment.id);
      visibleClose();
      chgInput("");
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
          <Btn onClick={openModal}>삭제</Btn>
          <Modal open={modalOpen} header="알림">
            <DeleteModal id={comment.id} closeModal={closeModal} />
          </Modal>
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