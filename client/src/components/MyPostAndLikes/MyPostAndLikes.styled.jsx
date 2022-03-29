import styled, { css } from "styled-components";

export const Block = styled.div`
  display: flex;
`;

export const IconAndText = styled.div`
  width: 212px;
  height: 100px;
  position: relative;
  cursor: pointer;
  ${(props) =>
    props.shadow &&
    css`
      &:active {
        opacity: 0.5;
      }
      &:focus {
        opacity: 0.5;
      }
    `}
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.62rem;
  right: 12rem;
`;
