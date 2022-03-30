// 모달창에서 게시물 삭제 기능

import React from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";

function RegisterDelModal({ closeModal }) {
  // 게시물 삭제하는 함수
  const onRemove = () => {
    closeModal();
  };
  return (
    <>
      <ModalFlexBox>
        <Logo src="logo2.png" alt="" />
        <Subject>정말로 게시물을 삭제하시겠습니까?</Subject>
      </ModalFlexBox>
      <ModalBtnBlock>
        <ModalBtn onClick={closeModal} color="#2E9AFE" font="#ffff">
          아니요
        </ModalBtn>
        <ModalBtn onClick={() => onRemove()}>네 삭제할래요</ModalBtn>
      </ModalBtnBlock>
    </>
  );
}

export default RegisterDelModal;
