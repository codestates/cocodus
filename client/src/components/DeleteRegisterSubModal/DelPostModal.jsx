// onlyUserBtn 에서 모달안에서 삭제 버튼을 클릭했을 경우,

import React, { useState } from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { boardDeleteLoadingStore } from "../../Store/loading-zustand";
import Modal from "../Modal/Modal";

function DelPostModal({ closeModal }) {
  const { modalOpen2, setModalOpen } = useState(false);
  const openModal2 = () => {
    setModalOpen(true);
  };
  const closeModal2 = () => {
    setModalOpen(false);
  };
  const { chgLoading4, chgError4 } = boardDeleteLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();

  // 삭제 버튼
  const onDelete = async () => {
    try {
      chgError4(null);
      chgLoading4(true);
      const delData = {
        accessToken,
        cocodusId,
        postId,
      };
      const delPost = await axios({
        method: "DELETE",
        url: "http://localhost:8080/board/list",
        data: {
          // jsonFile: JSON.stringify(delData),
          accessToken: accessToken,
          user_id: cocodusId,
          // post_id: postId,
        },
      });
      console.log(delPost);
      closeModal();
      openModal2();
    } catch (e) {
      chgError4(e);
    }
    chgLoading4(false);
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
        <ModalBtn onClick={onDelete}>네 삭제할래요</ModalBtn>
        <Modal open={modalOpen2} close={closeModal2} header="알림">
          <ModalFlexBox>
            <Logo src="logo2.png" alt="" />
            <Subject>삭제 완료되었습니다</Subject>
          </ModalFlexBox>
        </Modal>
      </ModalBtnBlock>
    </>
  );
}

export default DelPostModal;
