import React, { useRef } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { CgEye } from "react-icons/cg";
import { AiOutlinePaperClip } from "react-icons/ai";
import {
  IconsBlock,
  IconAndText,
  Text,
  TextArea,
} from "./LikesViewShareIcon.styled";
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function LikesViewShareIcon(props) {
  const { count, inc } = useStore();

  const textInput = useRef();

  const copy = () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy");
    alert("링크복사가 완료 되었습니다.");
  };
  return (
    <IconsBlock>
      <IconAndText>
        <AiOutlineLike size={30} onClick={inc} />
        <Text>{count}</Text>
      </IconAndText>
      <IconAndText>
        <CgEye size={30} />
        <Text>1</Text>
      </IconAndText>
      <IconAndText>
        <AiOutlinePaperClip size={30} onClick={copy} />
        <TextArea
          value={window.location.href}
          ref={textInput}
          readOnly
        ></TextArea>
      </IconAndText>
    </IconsBlock>
  );
}

export default LikesViewShareIcon;
