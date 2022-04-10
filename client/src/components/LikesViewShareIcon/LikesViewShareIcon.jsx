import React, { useRef, useState, useEffect } from "react";
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
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";
import { postData } from "../../Store/postData-zustand";
function LikesViewShareIcon(props) {
  const { accessToken, cocodusId, isLogin } = accessTokenStore();
  const { nickName } = registerUserInfoStore();
  const [likeClick, setLikeClick] = useState(false);
  const [totalPostLike, setTotalPostLike] = useState(0);
  const [render, setRender] = useState(false);
  const { specificdata } = postData();
  const [view, setView] = useState(0);
  useEffect(async () => {
    if (specificdata && specificdata.length) {
      let temp2 = await axios({
        method: "POST",
        url: "https://server.cocodus.site/board/view",
        params: {
          isLogin: isLogin,
          accessToken,
          cocodusId,
          nickName,
          post_id: specificdata[0].id,
        },
      });
      if (temp2.status === 200) {
        setView(temp2.data.veiw_count + 1);
      }
    }
  }, []);
  useEffect(async () => {
    // if (accessToken && cocodusId && isLogin) {
    if (specificdata && specificdata.length) {
      let temp = await axios({
        method: "GET",
        url: "/board/like",
        baseURL: "https://server.cocodus.site",
        params: {
          post_id: specificdata[0].id,
          accessToken,
          cocodusId,
          nickName,
          isLogin,
        },
      });

      setTotalPostLike(temp.data ? temp.data.total_like : 0);
      setLikeClick(temp.data ? !!temp.data.userLike : false);
    }
    // }
  }, [render, specificdata]);

  // 좋아요 버튼 클릭
  const countClick = async () => {
    if (specificdata.length) {
      let temp = await axios({
        method: "POST",
        url: "https://server.cocodus.site/board/like",
        params: {
          post_id: specificdata[0].id,
          accessToken,
          cocodusId,
          nickName,
          isLogin,
        },
      });
      setLikeClick(!!likeClick);
      setRender(!render);
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
    // console.log("링크 복사 완료");
  };

  return (
    <IconsBlock>
      <IconAndText>
        <AiOutlineLike className="likes" size={30} onClick={countClick} />
        <Text>{totalPostLike}</Text>
      </IconAndText>
      <IconAndText>
        <CgEye size={30} />
        <Text>{view}</Text>
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
