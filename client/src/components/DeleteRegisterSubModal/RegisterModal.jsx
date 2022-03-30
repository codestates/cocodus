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

function RegisterModal({ closeModal }) {
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
  const onRegister = () => {
    // title; // 글 제목
    // tag; // 사용언어(기술 스택), 배열
    // date; // 날짜
    // online; // 온라인 가능 여부 (불린값)
    // content; // 글 내용
    // placeName; // 장소명
    // roadAddress; // 도로명 주소
    // latitudeY; // 위도
    // longitudeX; // 경도
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
