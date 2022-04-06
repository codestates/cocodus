import React from "react";
import Modal from "../Modal/Modal";

function LoginModal({ open, close, header }) {
  return (
    <Modal open={open} close={close} header={header}>
      <a
        href={
          "https://github.com/login/oauth/authorize" +
          "?client_id=a3992310760bdbc99e31" +
          "&redirect_uri=http://localhost:8080/user/signup/github" +
          "&scope=user:email"
        }
      >
        <img style={{ width: "100px", marginLeft: "20px" }} src="Github.png" />
      </a>
      <a
        href={
          "https://kauth.kakao.com/oauth/authorize" +
          "?client_id=7f6f770eb46de1c098398a5231a5909d" +
          "&redirect_uri=http://localhost:8080/user/signup/kakao" +
          "&response_type=code"
        }
      >
        <img
          style={{ width: "100px", marginLeft: "20px" }}
          src="Kakaotalk.png"
        />
      </a>
      <a
        href={
          "https://accounts.google.com/o/oauth2/v2/auth" +
          "?client_id=286406699597-7mlmmmhid7n5dph3g3ce3s90do65bk4i.apps.googleusercontent.com" +
          "&response_type=code&redirect_uri=http://localhost:8080/user/signup/google" +
          "&scope=https://www.googleapis.com/auth/userinfo.email"
        }
      >
        <img style={{ width: "100px", marginLeft: "20px" }} src="Google.png" />
      </a>
    </Modal>
  );
}

export default LoginModal;
