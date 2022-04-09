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
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { postData } from "../../Store/postData-zustand";

function CommentArea({ msg }) {
  const { specificdata } = postData();
  const { input, visible, visibleOpen, visibleClose, chgInput } =
    updateCommentStore();
  // 모달
  const { modalOpen, openModal, closeModal } = commentModalStore();

  const { updateMsg } = commentStore();

  // 수정 버튼 클릭시
  const onClick = () => {
    chgInput(msg.comment);
    visibleOpen();
  };
  const onChange = (e) => {
    chgInput(e.target.value);
  };

  const { accessToken, cocodusId } = accessTokenStore();
  const comment_id = msg.id;

  // 엔터키를 입력시 수정 처리되는 함수
  const handleKeydown = async (e) => {
    if (e.key === "Enter") {
      const comment = await axios({
        method: "PATCH",
        url: "http://localhost:8080/board/cmt",
        params: {
          accessToken,
          user_id: cocodusId,
          postId: specificdata[0].id,
          comment_id,
          comment: input,
        },
      });
      console.log(comment);
      updateMsg(input, comment_id);
      visibleClose();
      chgInput("");
      // 댓글 수정 axios.patch 요청 작성
    }
  };
  if (!msg) return null;
  return (
    <Block>
      <FlexBox>
        <Img src="UserIcon.png" alt="userimg" />
        <div>
          <UserName>{msg.name}</UserName>
          <CreatedAt>2022-03-25</CreatedAt>
        </div>
        <BtnBlock>
          <Btn onClick={onClick}>수정</Btn>
          <Btn onClick={openModal}>삭제</Btn>
          <Modal open={modalOpen} header="알림">
            <DeleteModal id={msg.id} closeModal={closeModal} />
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
          msg.comment
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
          <CommentArea msg={comment} key={comment.id} />
        ))}
    </div>
  );
}

export default CommentList;
