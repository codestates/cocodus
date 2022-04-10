import React from "react";
import styled from "styled-components";

function LoadingPage() {
  return <Img src="Loading.gif" alt="로딩중" />;
}

const Img = styled.img`
  display: block;
  margin: 25% auto;
`;

export default LoadingPage;
