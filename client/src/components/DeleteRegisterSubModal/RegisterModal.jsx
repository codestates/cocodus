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

function RegisterModal({ closeModal }) {
  const { cocodusId } = accessTokenStore();
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
    let post = {
      user_id: cocodusId,
      title,
      body: content,
      tag,
      date,
      online,
      meetingpoint: placeName,
      roadAddress,
      y: latitudeY,
      x: longitudeX,
      recruiting: true,
    };
    post = JSON.stringify(post);

    const newPost = await axios({
      method: "POST",
      url: "http://localhost:8080/board/writing",
      data: post,
    });
    closeModal(); // 모달창 닫는 함수
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
        <ModalBtn onClick={() => onRegister()}>등록하기</ModalBtn>
      </ModalBtnBlock>
    </>
  );
}

export default RegisterModal;
