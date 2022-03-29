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
  const { removeMsg } = commentStore();
  const onRemove = (id) => {
    removeMsg(id);
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
