import React from "react";
import { BtnGroup, Btn } from "./Register/Register.styled";

function ClickButton({ click1, click2 }) {
  return (
    <>
      <BtnGroup>
        <Btn>{click1}</Btn>
        <Btn>{click2}</Btn>
      </BtnGroup>
    </>
  );
}

export default ClickButton;
