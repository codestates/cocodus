// 사용자 정보 수정 페이지

import React from "react";
import BackIcon from "../components/BackIcon/BackIcon";
import ClickButton from "../components/ClickButton";
import DeleteUserModal from "../components/DeleteRegisterSubModal/DeleteUserModal";
import ImgUpload from "../components/ImgUpload/ImgUpload";
import Modal from "../components/Modal/Modal";
import TitleContent from "../components/TitleContent";
import UserInfo from "../components/UserInfo/UserInfo";
import {
  withdrawalModalStore,
  userInfoEditModalStore,
} from "../Store/Modal-zustand";

function UserInfoEditPage(props) {
  return (
    <>
      <BackIcon />
      <TitleContent text="내 정보 수정" />
      <ImgUpload />
      <UserInfo />
      <ClickButton
        click1="수정하기"
        click2="탈퇴하기"
        Modal={Modal}
        store1={userInfoEditModalStore}
        store2={withdrawalModalStore}
        text="변경이"
        Tag={DeleteUserModal}
      />
    </>
  );
}

export default UserInfoEditPage;
