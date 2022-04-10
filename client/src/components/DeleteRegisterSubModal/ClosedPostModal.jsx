// onlyUserBtn 에서 모달안에서 마감 버튼을 클릭했을 경우,

import React, { useState } from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";
import { myPostClosedLoadingStore } from "../../Store/loading-zustand";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import Modal from "../Modal/Modal";
import { postData } from "../../Store/postData-zustand";
import { registerStore } from "../../Store/Register-zustand";

function closedPostModal({ closeModal }) {
  const { specificdata } = postData();
  const { recruiting, chgrecruiting } = registerStore();
  const { modalOpen2, setModalOpen } = useState(false);
  const openModal2 = () => {
    setModalOpen(true);
  };
  const closeModal2 = () => {
    setModalOpen(false);
  };
  const { chgLoading, chgError } = myPostClosedLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();

  // 마감 버튼
  const onRecruit = async () => {
    try {
      chgError(null);
      chgLoading(true);
      const closedPost = await axios({
        method: "PATCH",
        url: "https://server.cocodus.site/board/recruiting",
        data: {
          accessToken,
          user_id: cocodusId,
          postId: specificdata[0].id,
          recruiting: false,
        },
      });
      if (closedPost.status === 200) {
        navigate("/");
        chgrecruiting(false);
        // console.log(closedPost);
      }
      closeModal();
      openModal2();
    } catch (e) {
      chgError(e);
    }
    chgLoading(false);
  };

  return (
    <>
      <ModalFlexBox>
        <Logo src="logo2.png" alt="" />
        <Subject>정말로 마감 처리하시겠습니까?</Subject>
      </ModalFlexBox>

      <ModalBtnBlock>
        <ModalBtn onClick={closeModal} color="#2E9AFE" font="#ffff">
          아니요
        </ModalBtn>
        <ModalBtn onClick={onRecruit}>네 마감할래요</ModalBtn>
        <Modal open={modalOpen2} close={closeModal2} header="알림">
          <ModalFlexBox>
            <Logo src="logo2.png" alt="" />
            <Subject>마감 처리되었습니다</Subject>
          </ModalFlexBox>
        </Modal>
      </ModalBtnBlock>
    </>
  );
}

export default closedPostModal;
