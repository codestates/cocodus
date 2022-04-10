import styled from "styled-components";

export const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: rgba(179, 210, 220, 0.5);
  border: 1px solid rgba(179, 210, 220, 0.5);
  border-radius: 40%;
  & + & {
    margin-left: 1rem;
  }
`;

export const ContentBlock = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  width: 900px;
  min-height: 200px;
  border-top: 1px solid #ced4da;
  padding-top: 1rem;
`;
