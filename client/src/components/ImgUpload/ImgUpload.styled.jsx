import styled from "styled-components";

// 모든 이미지와, 이미지 선택,제거 버튼을 묶은 block
export const ImgBlock = styled.div`
  display: flex;
  width: 50%;
`;

// 이미지를 보여주는 tag
export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  border: 1px solid rgba(196, 196, 196, 0.26);
  background: rgba(179, 210, 220, 0.5);
  border-radius: 50%;
`;

// 이미지를 선택할 수 있는 태그(none 상태)
export const ImgInput = styled.input`
  display: none;
`;

// button 태그들을 묶은 block
export const BtnBlock = styled.div`
  width: 15rem;
  margin-left: 2rem;
`;

// 이미지 선택, 제거 button
export const ImgBtn = styled.button`
  background: rgba(196, 196, 196, 0.26);
  font-size: 16px;
  width: 90%;
  padding: 15px 8px;
  margin-top: 1rem;
  overflow: hidden;
  border: 1px solid #ced4da;
  border-radius: 10px;
  cursor: pointer;
`;
