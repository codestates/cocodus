import React from "react";
import { WriteIconBtn } from "../WriteIcon/WriteIcon.styled";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function WriteIcon(props) {
  const navigate = useNavigate();

  return (
    <WriteIconBtn onClick={() => navigate("/register")}>
      <BsPencil size={35} color="#fff" />
    </WriteIconBtn>
  );
}

export default WriteIcon;
