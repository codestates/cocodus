// 모달창에서 댓글 삭제 기능
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { postData } from "../../Store/postData-zustand";
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
  const { setReload } = commentStore();
  const { accessToken, cocodusId } = accessTokenStore();
  const { specificdata } = postData();

  const onRemove = async (id) => {
    const comment = await axios({
      method: "DELETE",
      url: "https://server.cocodus.site/board/cmt",
      params: {
        accessToken,
        user_id: cocodusId,
        postId: specificdata[0].id,
        comment_id: id,
      },
    });
    if (comment.status === 200) {
      closeModal();
      setReload();
    } else {
      console.log(comment);
      alert(
        "야 지우는거 진짜 클나따 여기 고쳐라 나중에 배포할때는 이거 빼는거 알지?"
      );
    }
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
