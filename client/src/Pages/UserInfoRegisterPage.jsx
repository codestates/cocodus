// 사용자 정보 등록 페이지

import React from "react";
import BackIcon from "../components/BackIcon/BackIcon";
import ClickButton from "../components/ClickButton";
import ImgUpload from "../components/ImgUpload/ImgUpload";
import TitleContent from "../components/TitleContent";
import UserInfo from "../components/UserInfo/UserInfo";

function UserInfoRegisterPage(props) {
  return (
    <>
      <BackIcon />
      <TitleContent text="내 정보 작성" />
      <ImgUpload />
      <UserInfo />
      <ClickButton click1="취소하기" click2="등록하기" />
    </>
  );
}

export default UserInfoRegisterPage;
