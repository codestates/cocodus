import React from "react";
import { CgArrowLeft } from "react-icons/cg";
import { Icon } from "./BackIcon.styled";
import { Outlet, useNavigate } from "react-router-dom";

function BackIcon(props) {
  const navigate = useNavigate();
  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  return (
    <Icon>
      <CgArrowLeft onClick={goBack} size={50} />
    </Icon>
  );
}

export default BackIcon;
