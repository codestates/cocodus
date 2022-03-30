// 사용자 정보 등록 페이지

import React from "react";
import BackIcon from "../components/BackIcon/BackIcon";
import ClickButton from "../components/ClickButton";
import ImgUpload from "../components/ImgUpload/ImgUpload";
import TitleContent from "../components/TitleContent";
import UserInfo from "../components/UserInfo/UserInfo";
import Modal from "../components/Modal/Modal";
import { userInfoRegisterModalStore } from "../Store/Modal-zustand";
import RegisterUserInfoModal from "../components/DeleteRegisterSubModal/RegisterUserInfoModal";
import KakaoMap from "../components/KakaoMap";
import KakaoSearchBox from "../components/KakaoSearchBox/KakaoSearchBox";
function UserInfoRegisterPage(props) {
  return (
    <>
      <BackIcon />
      <TitleContent text="내 정보 작성" />
      <ImgUpload />
      <UserInfo />
      <KakaoSearchBox />
      <KakaoMap />
      <ClickButton
        click1="취소하기"
        click2="등록하기"
        Modal={Modal}
        store2={userInfoRegisterModalStore}
        Tag={RegisterUserInfoModal}
      />
    </>
  );
}

export default UserInfoRegisterPage;
