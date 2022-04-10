// 사용자 정보 수정 페이지

import axios from "axios";
import React from "react";
import BackIcon from "../components/BackIcon/BackIcon";
import ClickButton from "../components/ClickButton";
import DeleteUserModal from "../components/DeleteRegisterSubModal/DeleteUserModal";
import ImgUpload from "../components/ImgUpload/ImgUpload";
import Modal from "../components/Modal/Modal";
import TitleContent from "../components/TitleContent";
import UserInfo from "../components/UserInfo/UserInfo";
import { accessTokenStore } from "../Store/accesstoken-zustand";
import {
  withdrawalModalStore,
  userInfoEditModalStore,
} from "../Store/Modal-zustand";
import { registerUserInfoStore } from "../Store/RegisterUserInfo-zustand";

function UserInfoEditPage(props) {
  const { accessToken, cocodusId } = accessTokenStore();
  const {
    userImg,
    nickName,
    tag,
    placeName,
    roadAddress,
    latitudeY,
    longitudeX,
  } = registerUserInfoStore();
  const { openModal } = userInfoEditModalStore();

  const onEditHandler = async () => {
    openModal();

    const editData = {
      accessToken,
      cocodusId,
      nickName,
      tag,
      roadAddress,
      placeName,
      latitudeY,
      longitudeX,
    };
    const editPost = await axios({
      method: "POST",
      url: "https://server.cocodus.site/board/writing",
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
    });
  };

  return (
    <>
      <BackIcon left="18rem" />
      <TitleContent text="내 정보 수정" />
      <ImgUpload />
      <UserInfo />
      <ClickButton
        click1="수정하기"
        click2="탈퇴하기"
        Modal={Modal}
        store1={userInfoEditModalStore}
        openModal={onEditHandler}
        store2={withdrawalModalStore}
        text="변경이"
        Tag={DeleteUserModal}
      />
    </>
  );
}

export default UserInfoEditPage;
