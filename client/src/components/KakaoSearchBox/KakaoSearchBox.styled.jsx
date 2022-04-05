import styled, { css } from "styled-components";
export const PlaceBox = styled.div`
  margin-top: 2rem;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
export const PlaceInputBox = styled.input`
  color: ${(props) => props.color};
  text-shadow: ${(props) => props.textShadow};
  background: rgba(196, 196, 196, 0.26);
  font-size: 16px;
  font-family: initial;
  width: 100%;
  padding: 10px 8px;
  overflow: hidden;
  border: 1px solid #ced4da;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: ${(props) => props.ri};
  ${(props) =>
    props.focus &&
    css`
      &:focus {
        outline: none;
      }
    `}
`;
export const Div = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: ${(props) => props.bottom};
  margin-right: 1rem;
  ${(props) =>
    props.huge &&
    css`
      position: absolute;
      right: 3rem;
      color: rgba(196, 196, 196);
      font-size: 20px;
    `};
`;
