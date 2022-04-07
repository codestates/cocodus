import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;

  & > div,
  & > ul {
    flex: 1;
  }
`;
