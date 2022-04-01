import styled from "styled-components";

export const Icon = styled.div`
  margin-top: 2rem;
  margin-left: ${(props) => props.left || "16rem"};
  display: inline-block;
  color: rgba(196, 196, 196);
  cursor: pointer;
`;
