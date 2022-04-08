import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #ebfbfe;
  opacity: 1;
  padding: 0px 0;
  position: sticky;
  top: 0;
  z-index: 999999;
  height: 120px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  cursor: pointer;
  display: flex;
  align-items: left;
  width: 150px;
  margin-top: 20px;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
`;

export const Block = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 5%;
`;
export const Name = styled.div`
  font-family: "Roboto", sans-serif;
  color: #3c4146;
  margin-right: 0.25rem;
  margin-left: 0.25rem;
  &:hover {
    opacity: 0.75;
  }
`;

export const Icon = styled.div`
  font-size: 1.5rem;
  margin-left: 0.25rem;
  color: rgb(134, 142, 150);
  transition: all 0.125s ease-in 0s;
  margin-top: 0.4rem;
  margin-right: -0.4375rem;
  &:hover {
    opacity: 0.75;
  }
`;

export const Icon2 = styled.div`
  height: 100px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.huge &&
    css`
      position: absolute;
      right: -17%;
      top: 0;
      z-index: 6;
    `};
`;

export const Img = styled.img`
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
  border-radius: 50%;
  object-fit: cover;
  transition: all 0.125s ease-in 0s;
  &:hover {
    opacity: 0.75;
  }
`;
