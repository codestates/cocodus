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
import axios from "axios";
import { accessTokenStore } from "../Store/accesstoken-zustand";
import { registerStore } from "../Store/Register-zustand";
import { boardPatchLoadingStore } from "../Store/loading-zustand";
import { postData } from "../Store/postData-zustand";
import { useNavigate } from "react-router-dom";

function RegisterEditPage(props) {
  let navigate = useNavigate();
  const { chgLoading, chgError } = boardPatchLoadingStore();
  const { openModal } = registerEditModalStore();
  const { accessToken, cocodusId } = accessTokenStore();
  const {
    inputs,
    tag,
    content,
    placeName,
    roadAddress,
    recruiting,
    latitudeY,
    longitudeX,
  } = registerStore();
  const { specificdata } = postData();
  const { title, date, online } = inputs;
  const postId = specificdata[0].id;
  // 글 수정 axios call
  const onEditHandler = async () => {
    try {
      chgError(null);
      chgLoading(true);
      const editData = {
        cocodusId,
        title,
        content,
        tag,
        date,
        online,
        placeName,
        roadAddress,
        latitudeY,
        longitudeX,
      };
      const editPost = await axios({
        method: "PATCH",
        url: "https://server.cocodus.site/board/writing",
        params: {
          accessToken,
          user_id: cocodusId,
          postId,
          tag,
          online,
          recruiting,
          lat: latitudeY,
          long: longitudeX,
          jsonfile: JSON.stringify(editData),
        },
      });
      openModal();
      navigate("/");
    } catch (e) {
      chgError(e);
    }
    chgLoading(false);
  };
  return (
    <>
      <Register />
      <ClickButton
        click1="글 수정하기"
        click2="삭제하기"
        Modal={Modal}
        store1={registerEditModalStore}
        openModal={onEditHandler}
        store2={registerDelModalStore}
        text="변경이"
        Tag={RegisterDelModal}
      />
    </>
  );
}

export default RegisterEditPage;
