import styled, { css } from "styled-components";

export const Block = styled.div`
  display: flex;
  width: 500px;
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 212px;
  height: 100px;
  position: relative;
  cursor: pointer;
  opacity: ${(props) => props.opacity};
  /* ${(props) =>
    props.shadow &&
    css`
      &:active {
        opacity: 0.5;
      }
      &:focus {
        opacity: 0.5;
      }
    `} */
`;

export const Icon = styled.div`
  position: absolute;
  top: 2rem;
  right: 12rem;
`;

export const Title = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 1.8rem;
  margin-left: 2rem;
`;
