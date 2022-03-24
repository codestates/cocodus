import { StyledHeader, Nav, Logo, Image } from "./NavBar.styled";
import { Container } from "../../components/styles/Container.styled";
import { Button } from "../../components/styles/Button.styled";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../components/styles/Global";
import Modal from "../Modal/Modal";
import styled from "styled-components";
export default function NavBar() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
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
      <StyledHeader>
        <Container>
          <Nav>
            <Logo src="logo2.png" alt="" />
            <Button>새 게시글 쓰기</Button>
            <Button onClick={openModal}>로그인</Button>
            <Modal open={modalOpen} close={closeModal} header="소셜 로그인">
              <img
                style={{ width: "100px", marginLeft: "20px" }}
                src="Naver.png"
              />
              <img
                style={{ width: "100px", marginLeft: "20px" }}
                src="Kakaotalk.png"
              />
              <img
                style={{ width: "100px", marginLeft: "20px" }}
                src="Google.png"
              />
            </Modal>
          </Nav>
        </Container>
      </StyledHeader>
    </ThemeProvider>
  );
}
