import React from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

function LoginModal({ open, close, header }) {
  return (
    <Modal open={open} close={close} header={header}>
      <ModalAlign>
        <a
          href={
            "https://github.com/login/oauth/authorize" +
            "?client_id=a3992310760bdbc99e31" +
            "&redirect_uri=https://server.cocodus.site/user/signup/github" +
            "&scope=user:email"
          }
        >
          <IMG
            style={{ width: "100px", marginLeft: "20px" }}
            src="Github.png"
          />
        </a>
        <a
          href={
            "https://kauth.kakao.com/oauth/authorize" +
            "?client_id=7f6f770eb46de1c098398a5231a5909d" +
            "&redirect_uri=https://server.cocodus.site/user/signup/kakao" +
            "&response_type=code"
          }
        >
          <IMG src="Kakaotalk.png" />
        </a>
        <a
          href={
            "https://accounts.google.com/o/oauth2/v2/auth" +
            "?client_id=286406699597-7mlmmmhid7n5dph3g3ce3s90do65bk4i.apps.googleusercontent.com" +
            "&response_type=code&redirect_uri=https://server.cocodus.site/user/signup/google" +
            "&scope=https://www.googleapis.com/auth/userinfo.email"
          }
        >
          <IMG src="Google.png" />
        </a>
      </ModalAlign>
    </Modal>
  );
}

export default LoginModal;

export const IMG = styled.img`
  width: 100px;
  margin-left: 20px;
  display: flex;
`;

export const ModalAlign = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-content: center;
  margin-right: 10px;
`;
