// 글 수정 페이지

import React from "react";
import ClickButton from "../components/ClickButton";
import Register from "../components/Register/Register";
import Modal from "../components/Modal/Modal";
import {
  registerDelModalStore,
  registerEditModalStore,
} from "../Store/Modal-zustand";
import RegisterDelModal from "../components/DeleteRegisterSubModal/RegisterDelModal";

function RegisterEditPage(props) {
  return (
    <>
      <Register />
      <ClickButton
        click1="글 수정하기"
        click2="삭제하기"
        Modal={Modal}
        store1={registerEditModalStore}
        store2={registerDelModalStore}
        text="변경이"
        Tag={RegisterDelModal}
      />
    </>
  );
}

export default RegisterEditPage;
