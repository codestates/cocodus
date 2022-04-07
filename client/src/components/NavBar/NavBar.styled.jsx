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
  width: 180px;
  right: -8%;
`;
export const Name = styled.div`
  position: absolute;
  font-family: "Roboto", sans-serif;
  color: #3c4146;
  left: 18%;
  padding: 10px;
  margin-left: 1rem;
  /* color: #333; */
  &:hover {
    opacity: 0.75;
  }
`;

export const Icon = styled.div`
  height: 50px;
  right: 10%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.75;
  }
  ${(props) =>
    props.huge &&
    css`
      /* position: absolute; */
      right: 0.5rem;
      top: 0;
      z-index: 6;
    `};
`;

export const Img = styled.img`
  /* background: rgba(223, 175, 0);
  opacity: 0.8; */
  position: absolute;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 0.5rem;
  &:hover {
    opacity: 0.75;
  }
`;
