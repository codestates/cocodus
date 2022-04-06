// onlyUserBtn 에서 모달안에서 마감 버튼을 클릭했을 경우,

import React from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";
import { myPostClosedLoadingStore } from "../../Store/loading-zustand";
import { accessTokenStore } from "../../Store/accesstoken-zustand";

function closedPostModal({ id, closeModal }) {
  // const { removeMsg } = commentStore();
  const { chgLoading, chgError } = myPostClosedLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();

  // 마감 버튼
  const onRecruit = async () => {
    try {
      chgError(null);
      chgLoading(true);
      const data = {
        user_id: cocodusId,
        postId,
        recruiting: false,
      };
      const closedPost = await axios({
        method: "PATCH",
        url: "http://localhost:8080/board/recruiting",
        data: {
          // jsonFile: JSON.stringify(data),
          accessToken,
          user_id: cocodusId,
          // post_id: postId,
          recruiting: false,
        },
      });
      if (closedPost.status === 200) {
        navigate("/");
        console.log(closedPost);
      } else {
        alert("뭔가 잘못됬어요!!");
        console.log(userData.status);
      }
      closeModal();
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
      </ModalBtnBlock>
    </>
  );
}

export default closedPostModal;
