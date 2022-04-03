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
import { userinfoLoadingStore } from "../../Store/loading-zustand";

function RegisterUserInfoModal({ closeModal }) {
  const { chgLoading, chgError } = userinfoLoadingStore();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
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
<<<<<<< HEAD
    try {
      chgError(null);
      chgLoading(true);
      const userData = await axios({
        method: "POST",
        url: "http://localhost:8080/user/info",
        data: JSON.stringify({
          accessToken,
          id: cocodusId,
          name: nickName,
          roadAddress,
          placeName,
          y: latitudeY,
          x: longitudeX,
        }),
      });
      if (userData.status === 201) {
        closeModal();
        navigate("/");
      } else {
        alert("뭔가 잘못됬어요!!");
        console.log(userData.status);
      }
    } catch (e) {
      chgError(e);
=======
    const userData = await axios({
      method: "POST",
      url: "http://localhost:8080/user/info",
      data: JSON.stringify({
        accessToken,
        id: cocodusId,
        name: nickName,
        roadAddress,
        placeName,
        y: latitudeY,
        x: longitudeX,
      }),
    });
    console.log(userData.status);
    if (userData.status === 201) {
      closeModal();
      navigate("/");
    } else {
      alert("뭔가 잘못됬어요!!");
      console.log(userData.status);
>>>>>>> 9125d239498eeecac1fd511bf042c69305af7d71
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
