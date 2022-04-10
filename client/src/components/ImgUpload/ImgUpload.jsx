// 유저 이미지 업로드 폼

import React, { useState, useRef } from "react";
import { ImgBlock, Img, ImgInput, BtnBlock, ImgBtn } from "./ImgUpload.styled";
import { Section } from "../styles/Section.styled";
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";

function ImgUpload() {
  const { userImg, chgImg, delImg } = registerUserInfoStore();

  const onChangeImg = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        chgImg(reader.result);
        resolve();
      };
    });
  };

  const logoImgInput = useRef();
  const onImgInputBtnClick = (e) => {
    e.preventDefault();
    logoImgInput.current.click();
  };

  return (
    <Section width="60%">
      <ImgBlock>
        <ImgInput
          ref={logoImgInput}
          type="file"
          onChange={(e) => {
            onChangeImg(e.target.files[0]);
          }}
        />
        {userImg && <Img src={userImg} alt="preview-img" />}
        <BtnBlock>
          <ImgBtn onClick={onImgInputBtnClick}>이미지 선택</ImgBtn>
          <ImgBtn onClick={delImg}>이미지 제거</ImgBtn>
        </BtnBlock>
      </ImgBlock>
    </Section>
  );
}
export default ImgUpload;
