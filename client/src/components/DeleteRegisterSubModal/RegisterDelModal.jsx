// 모달창에서 게시물 삭제 기능

import React from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";
import axios from "axios";
import { boardDeleteLoadingStore } from "../../Store/loading-zustand";
import { accessTokenStore } from "../../Store/accesstoken-zustand";

function RegisterDelModal({ closeModal }) {
  const { chgLoading4, chgError4 } = boardDeleteLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();
  // 게시물 삭제하는 함수
  const onRemove = async () => {
    try {
      chgError4(null);
      chgLoading4(true);
      const boardDel = await axios({
        method: "DELETE",
        url: "https://server.cocodus.site/board/writing",
        data: {
          accessToken,
          user_id: cocodusId,
          postId,
        },
      });
      // console.log(boardDel);
      closeModal();
    } catch (e) {
      chgError4(e);
    }
    chgLoading4(false);
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
        <ModalBtn onClick={onRemove}>네 삭제할래요</ModalBtn>
      </ModalBtnBlock>
    </>
  );
}

export default RegisterDelModal;
