import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { CgEye } from "react-icons/cg";
import { ImShare } from "react-icons/im";
import { IconsBlock, IconAndText, Text } from "./LikesViewShareIcon.styled";

function LikesViewShareIcon(props) {
  return (
    <IconsBlock>
      <IconAndText>
        <AiOutlineLike size={30} />
        <Text>0</Text>
      </IconAndText>
      <IconAndText>
        <CgEye size={30} />
        <Text>1</Text>
      </IconAndText>
      <ImShare size={30} style={{ marginLeft: "1.25rem", color: "#045FB4" }} />
    </IconsBlock>
  );
}

export default LikesViewShareIcon;
