import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: ${(props) => props.width || "70%"};
  margin: 0 auto;
  margin-top: ${(props) => props.top};
  margin-bottom: 4rem;
`;
