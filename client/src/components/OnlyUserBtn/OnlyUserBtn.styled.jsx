// 게시글 조회시 자신이 작성한 글이면,

import styled from "styled-components";

export const UserBlock = styled.div`
  display: flex;
  position: absolute;
  /* top: 10%; */
  padding-top: 30px;
  right: 16%;
`;

export const Div = styled.div`
  cursor: pointer;
  & + & {
    margin-left: 0.25rem;
  }
`;
