// 게시판 글 등록 페이지

import React from "react";
import ClickButton from "../components/ClickButton";
import Register from "../components/Register/Register";
import Modal from "../components/Modal/Modal";
import { registerModalStore } from "../Store/Modal-zustand";
import RegisterModal from "../components/DeleteRegisterSubModal/RegisterModal";

function RegisterPage(props) {
  return (
    <>
      <Register />
      <ClickButton
        click1="취소하기"
        click2="글 등록하기"
        Modal={Modal}
        store2={registerModalStore}
        text="등록이"
        Tag={RegisterModal}
      />
    </>
  );
}

export default RegisterPage;
