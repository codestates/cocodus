// 등록, 수정, 조회 폼 디자인

import styled, { css } from "styled-components";

export const Section = styled.section`
  background: #ffffff;
  position: relative;
  width: ${(props) => props.width || "65%"};
  margin: 0 auto;
  margin-top: ${(props) => props.top};
  margin-bottom: 4rem;
`;

// 글 제목
export const Title = styled.input`
  color: ${(props) => props.color};
  background: ${(props) => props.backGround || "rgba(196, 196, 196, 0.26)"};
  text-shadow: ${(props) => props.textShadow};
  width: 100%;
  margin-top: ${(props) => props.top};
  margin-bottom: 2rem;
  margin-left: ${(props) => props.left};
  padding: 30px 0;
  padding-left: 0.5rem;
  font-size: 3rem;
  font-weight: 700;
  border: none;
  border: ${(props) => props.borderBottom || "1px solid #ced4da"};
  &:focus {
    outline: none;
  }
`;

export const Div = styled.div`
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "18px"};
  background: ${(props) => props.backColor};
  margin-left: ${(props) => props.marginLeft};
  margin-right: 1rem;
  padding: 0.25rem;
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

export const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid rgba(196, 196, 196, 0.26);
  border-radius: 50%;
  margin-right: 0.5rem;
`;

// 언어, 지역 셀렉박스
export const InputBox = styled.input`
  color: ${(props) => props.color};
  text-shadow: ${(props) => props.textShadow};
  //
  background: ${(props) => props.backColor || "rgba(196, 196, 196, 0.26)"};
  //
  font-size: ${(props) => props.fontSize || "16px"};
  font-family: initial;
  width: ${(props) => props.width || "30%"};
  padding: 10px 8px;
  overflow: hidden;
  //
  border: ${(props) => props.Border || "1px solid #ced4da"};
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
  background: ${(props) => props.backColor || "rgba(196, 196, 196, 0.26)"};
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
  right: 20%;
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
  margin-left: 1rem;
`;

export const PlaceBox = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: flex-start;
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
