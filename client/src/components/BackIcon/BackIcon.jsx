import React from "react";
import { CgArrowLeft } from "react-icons/cg";
import { Icon } from "./BackIcon.styled";

function BackIcon(props) {
  return (
    <Icon>
      <CgArrowLeft size={50} />
    </Icon>
  );
}

export default BackIcon;
