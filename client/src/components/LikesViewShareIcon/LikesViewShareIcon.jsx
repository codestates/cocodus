import React, { useRef, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { CgEye } from "react-icons/cg";
import { AiOutlinePaperClip } from "react-icons/ai";
import {
  IconsBlock,
  IconAndText,
  Text,
  TextArea,
} from "./LikesViewShareIcon.styled";
import { likesCountStore } from "../../Store/LikesCount-zustand";
import Modal from "../Modal/Modal";
import {
  Logo,
  Subject,
  ModalFlexBox,
} from "../DeleteRegisterSubModal/DeleteModal.styled";
import { linkModalStore } from "../../Store/Modal-zustand";

function LikesViewShareIcon(props) {
  const { count, inc, dec } = likesCountStore();
  const [likeClick, setLikeClick] = useState(true);
  const countClick = () => {
    if (likeClick) {
      console.log("좋아요 클릭");
      setLikeClick(!likeClick);
      inc();
    } else {
      console.log("좋아요 취소");
      setLikeClick(!likeClick);
      dec();
    }
  };

  // 모달
  const { linkModal, openModal, closeModal } = linkModalStore();

  const textInput = useRef();
  // 링크 복사 함수
  const copy = () => {
    openModal();
    const el = textInput.current;
    el.select();
    document.execCommand("copy");
    console.log("링크 복사 완료");
  };

  return (
    <IconsBlock>
      <IconAndText>
        <AiOutlineLike className="likes" size={30} onClick={countClick} />
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
        <Modal open={linkModal} close={closeModal} header="알림">
          <ModalFlexBox>
            <Logo src="logo2.png" alt="" />
            <Subject>링크 복사가 완료되었습니다</Subject>
          </ModalFlexBox>
        </Modal>
      </IconAndText>
    </IconsBlock>
  );
}

export default LikesViewShareIcon;
