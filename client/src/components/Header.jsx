import { StyledHeader, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import React, { useState } from "react";
import { accessTokenStore } from "../Store/accesstoken-zustand";
import LoginModal from "./LoginModal/LoginModal";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  const { isLogin } = accessTokenStore();
  const [modalOpen, setModalOpen] = useState(false);
  const modalHandle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <StyledHeader>
      <Container>
        <Flex>
          <div>
            <h1> 만나서 코딩하실 분! 어디 없나요?</h1>
            <p>
              Cocodus에서 코딩 같이 할 사람을 구해보세요! <br></br>
              멋진 아이디어, 취업 준비를 위한 공부, 알고리즘 스터디 등 <br></br>
              내 주변에서 코딩할 멤버를 쉽게 모아보세요.
            </p>
            {isLogin ? (
              <Button
                bg="#D27E25"
                color="#fff"
                onClick={() => navigate("/register")}
              >
                멤버 모집하기
              </Button>
            ) : (
              <>
                <Button bg="#D27E25" color="#fff" onClick={modalHandle}>
                  멤버 모집하기
                </Button>
                <LoginModal
                  open={modalOpen}
                  close={modalHandle}
                  header="소셜 로그인"
                />
              </>
            )}
          </div>

          <Image src="TeamWork4.png" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
