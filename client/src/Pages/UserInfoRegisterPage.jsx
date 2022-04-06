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

function UserInfoRegisterPage(props) {
  return (
    <>
      <TitleContent text="내 정보 작성" top="2rem" />
      <ImgUpload />
      <UserInfo />
      <ClickButton
        click2="등록하기"
        Modal={Modal}
        store2={userInfoRegisterModalStore}
        Tag={RegisterUserInfoModal}
      />
    </>
  );
}

export default UserInfoRegisterPage;
