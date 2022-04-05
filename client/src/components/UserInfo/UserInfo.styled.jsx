import styled from "styled-components";

export const FlexBox = styled.div`
  margin-top: 5rem;
  margin-bottom: ${(props) => props.bottom};
  & + & {
    margin-top: 2rem;
  }
`;

export const Div = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const InputBox = styled.input`
  background: rgba(196, 196, 196, 0.26);
  font-size: 16px;
  font-family: initial;
  width: ${(props) => props.width || "30%"};
  padding: 10px 8px;
  overflow: hidden;
  border: 1px solid #ced4da;
  border-radius: 10px;
  margin-right: ${(props) => props.ri};
`;
