import styled from "styled-components";

export const Div = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 1rem;
  right: 0px;
`;

export const Ul = styled.ul`
  position: relative;
  z-index: 5;
  width: 12rem;
  background: white;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15);
  list-style: none;
`;

export const Li = styled.li`
  display: block;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 1px solid rgba(196, 196, 196, 0.26);
  &:hover {
    color: #4078c0;
  }
`;
