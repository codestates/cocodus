import React from "react";
import { WriteIconBtn } from "../WriteIcon/WriteIcon.styled";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { registerStore } from "../../Store/Register-zustand";

function WriteIcon(props) {
  const navigate = useNavigate();
  const { chgInput, chgOnline, chgTag, chgMarker, chgYear, chgHour, chgMin } =
    registerStore();
  const changeHandler = () => {
    chgInput("title", "");
    chgOnline("online", false);
    chgTag([]);
    chgMarker({ place_name: "", road_address_name: "", y: "", x: "" });
    chgYear("0000년 00월 00일");
    chgHour("00");
    chgMin("00");
    navigate("/register");
  };

  return (
    <WriteIconBtn onClick={changeHandler}>
      <BsPencil size={35} color="#fff" />
    </WriteIconBtn>
  );
}

export default WriteIcon;
