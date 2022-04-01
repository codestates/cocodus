import React from "react";
import styled from "styled-components";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { useNavigate } from "react-router-dom";

const Div = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 1rem;
  right: 0px;
`;

const Ul = styled.ul`
  position: relative;
  z-index: 5;
  width: 12rem;
  background: white;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
  list-style: none;
`;

const Li = styled.li`
  padding: 0.75rem 1rem;
  line-height: 1.5;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 1px solid rgba(196, 196, 196, 0.26);
`;

const DropDownBar = () => {
  let navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   const handleLogout = async () => {
  //     await authService.logout();
  //     dispatch(clearUser());
  //     dispatch(clearStep());
  //     authService.resetToken();
  //   };
  const { isLogin, chgIsLogin, chgAccToken } = accessTokenStore();
  const logoutHandle = () => {
    window.document.cookie = "access_token" + "=; Max-Age=-99999999;";
    chgIsLogin(false);
    chgAccToken("");
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
