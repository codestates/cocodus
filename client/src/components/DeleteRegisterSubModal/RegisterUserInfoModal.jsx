// 모달창에서 글 등록 기능

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ModalFlexBox,
  Logo,
  Subject,
  ModalBtnBlock,
  ModalBtn,
} from "./DeleteModal.styled";
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import axios from "axios";
import { userinfoPostLoadingStore } from "../../Store/loading-zustand";

function RegisterUserInfoModal({ closeModal }) {
  const { chgLoading, chgError } = userinfoPostLoadingStore();

  // 닉네임, 관심 기술 태그, 이미지(보류), 위치
  let navigate = useNavigate();
  const {
    userImg,
    nickName,
    tag,
    placeName,
    roadAddress,
    latitudeY,
    longitudeX,
  } = registerUserInfoStore();
  const { accessToken, cocodusId } = accessTokenStore();
  // 회원 정보 등록하는 함수
  const onRegister = async () => {
    try {
      chgError(null);
      chgLoading(true);
      const userInfo = {
        accessToken,
        cocodusId,
        nickName,
        roadAddress,
        placeName,
        latitudeY,
        longitudeX,
      };
      const userDataSave = await axios({
        method: "POST",
        url: "https://server.cocodus.site/user/info",
        params: {
          id: cocodusId,
          name: nickName,
          accessToken,
          roadAddress,
          location: placeName,
          lat: latitudeY,
          long: longitudeX,
          tag,
        },
        // data: {
        //   id: cocodusId,
        //   name: nickName,
        //   accessToken,
        //   roadAddress,
        //   location: placeName,
        //   lat: latitudeY,
        //   long: longitudeX,
        //   tag,
        // },
      });
      if (userDataSave.status === 201) {
        // console.log(userDataSave);
        closeModal();
        navigate("/");
      } else {
        closeModal();
      }
    } catch (e) {
      chgError(e);
    }
    chgLoading(false);
  };

  return (
    <>
      <ModalFlexBox>
        <Logo src="logo2.png" alt="" />
        <Subject>정보를 등록하시겠습니까?</Subject>
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

export default RegisterUserInfoModal;
