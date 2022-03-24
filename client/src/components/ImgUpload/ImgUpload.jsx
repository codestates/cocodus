// 유저 이미지 업로드 폼

import React, { useState, useRef } from "react";
import { ImgBlock, Img, ImgInput, BtnBlock, ImgBtn } from "./ImgUpload.styled";
import { Section } from "../styles/Section.styled";

function ImgUpload() {
  const [imageSrc, setImageSrc] = useState("UserIcon.png");

  const onChangeImg = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const onRemoveImg = () => {
    setImageSrc("UserIcon.png");
  };

  const logoImgInput = useRef();
  const onImgInputBtnClick = (e) => {
    e.preventDefault();
    logoImgInput.current.click();
  };

  return (
    <Section>
      <ImgBlock>
        <ImgInput
          ref={logoImgInput}
          type="file"
          onChange={(e) => {
            onChangeImg(e.target.files[0]);
          }}
        />
        {imageSrc && <Img src={imageSrc} alt="preview-img" />}
        <BtnBlock>
          <ImgBtn onClick={onImgInputBtnClick}>이미지 선택</ImgBtn>
          <ImgBtn onClick={onRemoveImg}>이미지 제거</ImgBtn>
        </BtnBlock>
      </ImgBlock>
    </Section>
  );
}
export default ImgUpload;
