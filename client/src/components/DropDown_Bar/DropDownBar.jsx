import React from "react";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { useNavigate } from "react-router-dom";
import { Div, Ul, Li } from "./DropDownBar.styled";
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";

const DropDownBar = () => {
  let navigate = useNavigate();

  const { chgInput } = registerUserInfoStore();
  const { chgIsLogin, chgAccToken, chgCocoId } = accessTokenStore();
  const logoutHandle = () => {
    window.document.cookie = "accessToken" + "=; Max-Age=-99999999;";
    window.document.cookie = "cocodusId" + "=; Max-Age=-99999999;";
    chgIsLogin(false);
    chgAccToken("");
    chgInput("");
    chgCocoId("");
  };

  return (
    <Div>
      <Ul>
        <Li onClick={() => navigate("/userinfoedit")}>내 정보</Li>
        <Li onClick={() => navigate("/mypost")}>내 작성글</Li>
        <Li onClick={() => navigate("/mylikes")}>내 관심글</Li>
        <Li onClick={logoutHandle}>로그아웃</Li>
      </Ul>
    </Div>
  );
};

export default DropDownBar;
