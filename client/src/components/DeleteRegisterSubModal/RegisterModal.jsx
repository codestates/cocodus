// 모달창에서 글 등록 기능

import React from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";

function RegisterModal({ closeModal }) {
  const onRemove = () => {
    closeModal();
  };
  return (
    <>
      <ModalFlexBox>
        <Logo src="logo2.png" alt="" />
        <Subject>게시물을 등록하시겠습니까?</Subject>
      </ModalFlexBox>

      <ModalBtnBlock>
        <ModalBtn onClick={closeModal} color="#2E9AFE" font="#ffff">
          취소하기
        </ModalBtn>
        <ModalBtn onClick={() => onRemove()}>등록하기</ModalBtn>
      </ModalBtnBlock>
    </>
  );
}

export default RegisterModal;
