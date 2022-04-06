// 모달창에서 글 등록 기능

import React from "react";
import { registerStore } from "../../Store/Register-zustand";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { boardPostLoadingStore } from "../../Store/loading-zustand";
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";

function RegisterModal({ closeModal }) {
  const { chgLoading, chgError } = boardPostLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();
  const { nickName } = registerUserInfoStore();
  const {
    inputs,
    tag,
    content,
    placeName,
    roadAddress,
    latitudeY,
    longitudeX,
  } = registerStore();
  const { title, date, online } = inputs;

  // 클릭하는 순간 글이 등록되게하는 함수
  const onRegister = async () => {
    try {
      chgError(null);
      chgLoading(true);
      const postData = {
        accessToken,
        cocodusId,
        nickName,
        title,
        content,
        tag,
        date,
        online,
        placeName,
        roadAddress,
        latitudeY,
        longitudeX,
      };

      const newPost = await axios({
        method: "POST",
        url: "http://localhost:8080/board/writing",
        data: {
          jsonfile: JSON.stringify(postData),
          accessToken,
          user_id: cocodusId,
          lat: latitudeY,
          long: longitudeX,
          recruiting: true,
          online: online,
        },
      });
      console.log(newPost);
      closeModal(); // 모달창 닫는 함수
    } catch (e) {
      chgError(e);
    }
    chgLoading(false);
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
        <ModalBtn onClick={onRegister}>등록하기</ModalBtn>
      </ModalBtnBlock>
    </>
  );
}

export default RegisterModal;
