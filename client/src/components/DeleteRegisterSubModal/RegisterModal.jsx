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
import { useNavigate } from "react-router-dom";
import { registerNotiModalStore } from "../../Store/Modal-zustand";
import Modal from "../Modal/Modal";

function RegisterModal({ closeModal }) {
  let navigate = useNavigate();
  const { modalOpen2, openModal2, closeModal2 } = registerNotiModalStore();
  const { chgLoading, chgError } = boardPostLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();
  const { nickName } = registerUserInfoStore();
  const {
    inputs,
    chgInput,
    chgOnline,
    tag,
    chgTag,
    content,
    placeName,
    roadAddress,
    latitudeY,
    longitudeX,
    chgMarker,
    year,
    chgYear,
    hour,
    chgHour,
    minute,
    chgMin,
    recruiting,
  } = registerStore();
  const { title, online } = inputs;

  // 클릭하는 순간 글이 등록되게하는 함수
  const onRegister = async () => {
    try {
      chgError(null);
      chgLoading(true);
      const postData = {
        cocodusId,
        nickName,
        title,
        content,
        tag,
        date: `${year} ${hour}시 ${minute}분`,
        online,
        placeName,
        roadAddress,
        latitudeY,
        longitudeX,
      };

      const newPost = await axios({
        method: "POST",
        url: "https://server.cocodus.site/board/writing",
        data: {
          accessToken,
          user_id: cocodusId,
          lat: latitudeY,
          long: longitudeX,
          recruiting,
          online: online,
          tag,
          jsonfile: JSON.stringify(postData),
        },
      });
      console.log("등록 상태코드", newPost.status);
      // 등록 정보 초기화
      chgInput("title", "");
      chgOnline("online", false);
      chgTag([]);
      chgMarker({ place_name: "", road_address_name: "", y: "", x: "" });
      closeModal(); // 모달창 닫는 함수
      navigate("/");
      // openModal2();
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
        <Modal open={modalOpen2} close={closeModal2} header="알림">
          <Logo src="logo2.png" alt="" />
          <Subject>게시물이 등록되었습니다.</Subject>
        </Modal>
      </ModalBtnBlock>
    </>
  );
}

export default RegisterModal;
