import styled from "styled-components";

// 전체 아이콘 블럭
export const IconsBlock = styled.div`
  display: flex;
  float: right;
  margin-top: 2.32rem;
  cursor: pointer;
`;

// 아이콘과 그 수를 묶음
export const IconAndText = styled.div`
  display: flex;
  overflow: hidden;
  & + & {
    margin-left: 1rem;
  }
`;

// 조회수, 좋아요 수
export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.25rem;
`;

export const TextArea = styled.textarea`
  position: absolute;
  width: 0px;
  height: 0px;
  bottom: 0;
  left: 0;
  opacity: 0;
`;
