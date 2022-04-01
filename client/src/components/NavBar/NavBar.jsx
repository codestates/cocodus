import { StyledHeader, Nav, Logo, Image } from "./NavBar.styled";
import { Container } from "../../components/styles/Container.styled";
import { Button } from "../../components/styles/Button.styled";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../components/styles/Global";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from "axios";
import { AiOutlineDesktop } from "react-icons/ai";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { AiFillCaretDown } from "react-icons/ai";
import DropDownBar from "../DropDown_Bar/DropDownBar";

export default function NavBar() {
  const { isLogin } = accessTokenStore();
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
  const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 190px;
    right: -8%;
  `;
  const Name = styled.div`
    position: absolute;
    left: 0;
    & + & {
      margin-left: 6rem;
    }
    z-index: 0;
  `;
  const Icon = styled.div`
    cursor: pointer;
    ${(props) =>
      props.drop &&
      css`
        position: absolute;
        right: 0;
        /* color: rgba(196, 196, 196); */
      `};
  `;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledHeader>
        <Container>
          <Nav>
            <Logo onClick={() => navigate("/")} src="logo2.png" alt="" />
            {isLogin ? (
              <>
                <Button onClick={() => navigate("/register")}>
                  새 게시글 쓰기
                </Button>
                {/* <Button>안녕하세요 김코딩님</Button> */}
                {/* <img src="UserIcon.png" /> */}
                {/* <Button onClick={logoutHandle}>로그아웃</Button> */}
                <Block onClick={onHandleMenu}>
                  <Name>김코딩님</Name>
                  <Icon>
                    <AiFillCaretDown />
                  </Icon>
                  {menuVisible && <DropDownBar />}
                </Block>
              </>
            ) : (
              <>
                <Button onClick={modalHandle}>로그인</Button>
              </>
            )}
            <Modal open={modalOpen} close={modalHandle} header="소셜 로그인">
              <a
                href={
                  "https://github.com/login/oauth/authorize" +
                  "?client_id=a3992310760bdbc99e31" +
                  "&redirect_uri=http://localhost:8080/user/signup/github" +
                  "&scope=user:email"
                }
              >
                <img
                  style={{ width: "100px", marginLeft: "20px" }}
                  src="Github.png"
                />
              </a>
              <a
                href={
                  "https://kauth.kakao.com/oauth/authorize" +
                  "?client_id=7f6f770eb46de1c098398a5231a5909d" +
                  "&redirect_uri=http://localhost:8080/user/signup/kakao" +
                  "&response_type=code"
                }
              >
                <img
                  style={{ width: "100px", marginLeft: "20px" }}
                  src="Kakaotalk.png"
                />
              </a>
              <a
                href={
                  "https://accounts.google.com/o/oauth2/v2/auth" +
                  "?client_id=286406699597-7mlmmmhid7n5dph3g3ce3s90do65bk4i.apps.googleusercontent.com" +
                  "&response_type=code&redirect_uri=http://localhost:8080/user/signup/google" +
                  "&scope=https://www.googleapis.com/auth/userinfo.email"
                }
              >
                <img
                  style={{ width: "100px", marginLeft: "20px" }}
                  src="Google.png"
                />
              </a>
            </Modal>
          </Nav>
        </Container>
      </StyledHeader>
    </ThemeProvider>
  );
}
