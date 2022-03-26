import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import styled from "styled-components";
import axios from "axios";
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Flex>
          <div>
            <h1> 모각코 같이 하실 분! 어디 없나요?</h1>
            <p>
              Cocodus에서 모각코 같이 할 사람을 구해보세요! <br></br>
              멋진 아이디어, 취업 준비를 위한 공부, 알고리즘 스터디 등 <br></br>
              따로 또는 같이 코딩할 멤버를 쉽게 만나보세요.
            </p>

            <Link to="/register">
              <Button bg="#D27E25" color="#fff">
                멤버 모집하기
              </Button>
            </Link>
          </div>

          <Image src="TeamWork.png" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
