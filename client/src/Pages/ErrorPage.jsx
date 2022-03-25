import React from "react";
import { StyledHeader } from "../components/NavBar/NavBar.styled";
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../components/styles/Container.styled";

function Error() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Flex>
            <div>
              <div>
                <h2>
                  오류가 있는 것 같군요! 멋진 동료들을 다시 만나보고 싶으세요?
                </h2>
                <Link to="/">
                  <Button bg="#D27E25" color="#fff" style={{ float: "right" }}>
                    홈으로
                  </Button>
                </Link>
              </div>
              <img src="TeamWork3.png" style={{ width: "800px" }} />
            </div>
          </Flex>
        </Container>
      </StyledHeader>
    </>
  );
}

export default Error;
