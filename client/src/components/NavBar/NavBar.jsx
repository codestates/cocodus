import {
  StyledHeader,
  Nav,
  Logo,
  Block,
  Name,
  Icon,
  Img,
  Icon2,
} from "./NavBar.styled";
import { Container } from "../../components/styles/Container.styled";
import { Button } from "../../components/styles/Button.styled";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../components/styles/Global";
import { useNavigate } from "react-router-dom";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import DropDownBar from "../DropDown_Bar/DropDownBar";
import { CgMenu } from "react-icons/cg";
import { AiFillCaretUp } from "react-icons/ai";
import LoginModal from "../LoginModal/LoginModal";
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";

export default function NavBar() {
  const { isLogin, accessToken } = accessTokenStore();
  const { nickName } = registerUserInfoStore();

  // 계정을 클릭하면 나오는 view
  const [menuVisible, setMenuVisible] = useState(false);
  const onHandleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const [modalOpen, setModalOpen] = useState(false);
  let navigate = useNavigate();

  const modalHandle = () => {
    setModalOpen(!modalOpen);
  };

  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#00333",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledHeader style={{ opacity: 1 }}>
        <Container>
          <Nav>
            <Logo onClick={() => navigate("/")} src="logo2.png" alt="" />
            {isLogin && accessToken && nickName ? (
              <>
                <Block onClick={onHandleMenu}>
                  <Img src="UserIcon7.png" alt="" />
                  <Name>{nickName}님</Name>
                  <Icon>
                    <CgMenu color="#3c4146" size={25} />
                  </Icon>
                  {menuVisible && (
                    <>
                      <Icon2 huge>
                        <AiFillCaretUp style={{ color: "#fff" }} size={65} />
                      </Icon2>
                      <DropDownBar />
                    </>
                  )}
                </Block>
              </>
            ) : (
              <>
                <Button onClick={modalHandle}>로그인</Button>
              </>
            )}
            <LoginModal
              open={modalOpen}
              close={modalHandle}
              header="소셜 로그인"
            />
          </Nav>
        </Container>
      </StyledHeader>
    </ThemeProvider>
  );
}
