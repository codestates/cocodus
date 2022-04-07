import styled from "styled-components";

export const ModalFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 80px;
`;

export const Logo = styled.img`
  width: 70px;
`;

export const Subject = styled.div`
  font-size: 19px;
  margin-right: 4rem;
`;

export const ModalBtnBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const ModalBtn = styled.button`
  background: ${(props) => props.color};
  cursor: pointer;
  border-radius: 10%;
  font-size: 1rem;
  color: ${(props) => props.font};
  & + & {
    margin-left: 0.5rem;
  }
`;
