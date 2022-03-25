// 사용자 정보 수정 페이지

import React from "react";
import BackIcon from "../components/BackIcon/BackIcon";
import ClickButton from "../components/ClickButton";
import ImgUpload from "../components/ImgUpload/ImgUpload";
import TitleContent from "../components/TitleContent";
import UserInfo from "../components/UserInfo/UserInfo";

function UserInfoEditPage(props) {
  return (
    <>
      <BackIcon />
      <TitleContent text="내 정보 수정" />
      <ImgUpload />
      <UserInfo />
      <ClickButton click1="수정하기" click2="탈퇴하기" />
    </>
  );
}

export default UserInfoEditPage;
