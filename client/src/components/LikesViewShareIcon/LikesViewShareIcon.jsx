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
import Modal from "../Modal/Modal";
import {
  Logo,
  Subject,
  ModalFlexBox,
} from "../DeleteRegisterSubModal/DeleteModal.styled";
import { linkModalStore } from "../../Store/Modal-zustand";
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";

function LikesViewShareIcon(props) {
  const { accessToken, cocodusId } = accessTokenStore();
  const [likeClick, setLikeClick] = useState(true);

  // 좋아요 버튼 클릭
  const countClick = async () => {
    if (likeClick) {
      await axios({
        method: "PATCH",
        url: "http://localhost:8080/board/like",
        data: {
          accessToken,
          user_id: cocodusId,
          // post_id,
          inc: true,
        },
      });
      setLikeClick(!likeClick);
    } else {
      await axios({
        method: "PATCH",
        url: "http://localhost:8080/board/like",
        data: {
          accessToken,
          user_id: cocodusId,
          // post_id,
          inc: false,
        },
      });
      setLikeClick(!likeClick);
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
        <Text>1</Text>
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
