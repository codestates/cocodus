import styled from "styled-components";

export const Block = styled.section`
  margin-top: 10rem;
  & + & {
    margin-top: 2rem;
  }
`;

export const FlexBox = styled.div`
  position: relative;
  display: flex;
  margin-top: 5rem;
`;

// 이미지를 보여주는 tag
export const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border: 1px solid rgba(196, 196, 196, 0.26);
  background: rgba(179, 210, 220, 0.5);
  border-radius: 50%;
`;

export const UserName = styled.div`
  padding-top: 0.5rem;
  margin-left: 1rem;
`;

export const CreatedAt = styled.div`
  margin-left: 1rem;
`;

export const Msg = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(196, 196, 196, 0.5);
`;

export const Input = styled.textarea`
  display: inline-block;
  border: none;
  font-size: 18px;
  width: 100%;
  height: 100%;
`;

export const BtnBlock = styled.div`
  position: absolute;
  right: 0%;
  top: 30%;
`;

export const Btn = styled.button`
  background: #ffffff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
`;
