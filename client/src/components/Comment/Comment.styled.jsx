import styled, { css } from "styled-components";

export const DivBlock = styled.div`
  margin-bottom: 1.5rem;
  margin-right: 0.5rem;
  font-size: ${(props) => props.size || "1.125rem"};
  font-weight: ${(props) => props.weight || "500"};
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  ${(props) =>
    props.huge &&
    css`
      position: absolute;
      left: ${(props) => props.le};
      right: ${(props) => props.ri};
      top: 0;
      margin-top: 1.5rem;
    `}
`;

export const Text = styled.textarea`
  background: rgba(196, 196, 196, 0.26);
  resize: none;
  display: block;
  font-family: inherit;
  font-size: 18px;
  padding: 1rem 1rem 1.5rem;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  height: 100px;
  border: 1px solid #ced4da;
`;
