// 등록, 수정, 조회 폼 디자인

import styled, { css } from "styled-components";

export const Section = styled.section`
  background: #ffffff;
  position: relative;
  width: ${(props) => props.width || "70%"};
  margin: 0 auto;
  margin-top: ${(props) => props.top};
  margin-bottom: 4rem;
`;

// 글 제목
export const Title = styled.input`
  color: ${(props) => props.color};
  background: rgba(196, 196, 196, 0.26);
  text-shadow: ${(props) => props.textShadow};
  width: 100%;
  margin-top: ${(props) => props.top};
  margin-bottom: 2rem;
  padding: 30px 0;
  font-size: 3rem;
  font-weight: 700;
  border: none;
  border-bottom: ${(props) => props.borderBottom || "1px solid #ced4da"};
  &:focus {
    outline: none;
  }
`;

export const Div = styled.div`
  font-weight: 500;
  font-size: 18px;
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

// 사용언어, 언어셀렉박스
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.top};
  margin-left: 2em;
  margin-bottom: 2rem;
  border-bottom: ${(props) => props.border};
  ${(props) =>
    props.huge &&
    css`
      position: absolute;
      right: 3rem;
      margin-top: 1.5rem;
    `};
`;

// 언어, 지역 셀렉박스
export const InputBox = styled.input`
  color: ${(props) => props.color};
  text-shadow: ${(props) => props.textShadow};
  background: rgba(196, 196, 196, 0.26);
  font-size: 16px;
  font-family: initial;
  width: ${(props) => props.width || "30%"};
  padding: 10px 8px;
  overflow: hidden;
  border: 1px solid #ced4da;
  border-radius: 10px;
  margin-right: ${(props) => props.ri};
  ${(props) =>
    props.focus &&
    css`
      &:focus {
        outline: none;
      }
    `}
`;

export const Label = styled.label`
  background: rgba(196, 196, 196, 0.26);
  font-size: 16px;
  width: 15%;
  margin-left: 10rem;
  padding: 10px 8px;
  border-radius: 10px;
  /* box-sizing: border-box; */
`;

export const CheckBox = styled(InputBox)`
  margin: 0;
`;

// 취소, 등록 버튼 담는 block
export const BtnGroup = styled.div`
  position: absolute;
  right: 16%;
  margin-top: 1rem;
`;

export const Btn = styled.button`
  width: 124px;
  font-size: 16px;
  padding: 0.7rem;
  background: #d27e25;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  float: ${(props) => props.float};
  margin-top: ${(props) => props.top};
  margin-bottom: 2rem;
  cursor: pointer;
  & + & {
    margin-left: 1rem;
  }
`;
