import { StyledHeader, Nav, Logo, Image } from "./NavBar.styled";
import { Container } from "../../components/styles/Container.styled";
import { Button } from "../../components/styles/Button.styled";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../components/styles/Global";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
export default function NavBar({}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setEmail("");
    setPassword("");
  };

  const inputHandler = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };
  const submitHandler = async () => {
    setModalOpen(false);
    let temp = await axios.post("http://localhost:8080/user/login", {
      data: { email, password },
    });
    console.log(temp);
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
            <a href="/">
              <Logo src="logo2.png" alt="" />
            </a>

            <a href="/register">
              <Button>새 게시글 쓰기</Button>
            </a>
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
              <form action="/register">
                <input
                  onChange={inputHandler}
                  placeholder="email"
                  type="text"
                  id="email"
                  value={email}
                  autoComplete="off"
                />
                <input
                  onChange={inputHandler}
                  placeholder="psw"
                  type="password"
                  value={password}
                  id="password"
                />
              </form>
              <button onClick={submitHandler}>로그인</button>
            </Modal>
          </Nav>
        </Container>
      </StyledHeader>
    </ThemeProvider>
  );
}
