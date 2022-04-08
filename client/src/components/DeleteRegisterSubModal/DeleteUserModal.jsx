// 모달창에서 회원 탈퇴 기능

import React from "react";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";
import { useNavigate } from "react-router-dom";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import axios from "axios";

function DeleteUserModal({ closeModal }) {
  const { cocodusId, accessToken, isLogin, chgIsLogin } = accessTokenStore();
  let navigate = useNavigate();
  const onRemove = async () => {
    let temp = await axios({
      baseURL: "http://localhost:8080",
      url: "/user/info",
      method: "delete",
      params: {
        cocodusId,
        accessToken,
        isLogin,
      },
    });
    if (temp.status === 201) {
      chgIsLogin(false);
      closeModal();
      navigate("/");
    }
  };
  return (
    <>
      <ModalFlexBox>
        <Logo src="logo2.png" alt="" />
        <Subject>정말로 탈퇴하시겠습니까?</Subject>
      </ModalFlexBox>

      <ModalBtnBlock>
        <ModalBtn onClick={closeModal} color="#2E9AFE" font="#ffff">
          아니요
        </ModalBtn>
        <ModalBtn onClick={() => onRemove()}>네 탈퇴할래요</ModalBtn>
      </ModalBtnBlock>
    </>
  );
}

export default DeleteUserModal;
