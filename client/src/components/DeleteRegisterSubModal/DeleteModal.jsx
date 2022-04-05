// 모달창에서 댓글 삭제 기능

import React from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";
import { commentStore } from "../../Store/Comment-zustand";

function DeleteModal({ id, closeModal }) {
  // const { removeMsg } = commentStore();
  const { accessToken, cocodusId } = accessTokenStore();
  const commentInfo = {
    accessToken,
    cocodusId,
    postId,
  };
  const onRemove = async (id) => {
    const comment = await axios({
      method: "DELETE",
      url: "http://localhost:8080/board/cmt",
      data: {
        jsonFile: JSON.stringify(commentInfo),
        accessToken,
        user_id: cocodusId,
        post_id: postId,
        comment_id: commentId,
      },
    });
    // removeMsg(id);
    closeModal();
  };
  return (
    <>
      <ModalFlexBox>
        <Logo src="logo2.png" alt="" />
        <Subject>정말로 삭제하시겠습니까?</Subject>
      </ModalFlexBox>

      <ModalBtnBlock>
        <ModalBtn onClick={closeModal} color="#2E9AFE" font="#ffff">
          아니요
        </ModalBtn>
        <ModalBtn onClick={() => onRemove(id)}>네 삭제할래요</ModalBtn>
      </ModalBtnBlock>
    </>
  );
}

export default DeleteModal;
