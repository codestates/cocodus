// 댓글 등록 기능
import React, { useState, useEffect, useRef } from "react";
import {
  Block,
  FlexBox,
  Img,
  UserName,
  CreatedAt,
  Msg,
  Input,
  BtnBlock,
  Btn,
} from "./CommentList.styled";
import { commentStore } from "../../Store/Comment-zustand";
import { commentModalStore } from "../../Store/Modal-zustand";
import { updateCommentStore } from "../../Store/UpdateComment-zustand";
import DeleteModal from "../DeleteRegisterSubModal/DeleteModal";
import Modal from "../Modal/Modal";
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { postData } from "../../Store/postData-zustand";

function CommentArea({ cmtData }) {
  const { specificdata } = postData();
  const { visible, visibleOpen, visibleClose } = updateCommentStore();
  const { modalOpen, openModal, closeModal } = commentModalStore();
  const [cmtText, setCmtText] = useState(cmtData.comment);
  const [cmtShow, setCmtShow] = useState(false);
  const { setReload } = commentStore();

  // 수정 버튼 클릭시
  const onClick = (e) => {
    setCmtShow(true);
    visibleOpen();
  };

  const { accessToken, cocodusId } = accessTokenStore();
  const comment_id = cmtData.id;

  // 엔터키를 입력시 수정 처리되는 함수
  const handleKeydown = async (e) => {
    if (e.key === "Enter") {
      const comment = await axios({
        method: "PATCH",
        url: "https://server.cocodus.site/board/cmt",
        params: {
          accessToken,
          user_id: cocodusId,
          postId: specificdata[0].id,
          comment_id,
          comment: cmtText,
        },
      });
      if (comment.status === 200 || comment.status === 204) {
        visibleClose();
        setCmtShow(false);
        setCmtText("");
        setReload();
      }
    }
  };
  if (!cmtData) return null;
  return (
    <Block>
      <FlexBox>
        <Img src="UserIcon7.png" alt="userimg" />
        <div>
          <UserName>{cmtData.name}</UserName>
          <CreatedAt>2022-03-25</CreatedAt>
        </div>
        <BtnBlock>
          <Btn id={cmtData.id} onClick={onClick}>
            수정
          </Btn>
          <Btn onClick={openModal}>삭제</Btn>
          <Modal open={modalOpen} header="알림" close={closeModal}>
            <DeleteModal id={cmtData.id} closeModal={closeModal} />
          </Modal>
        </BtnBlock>
      </FlexBox>
      <Msg>
        {visible && cmtShow ? (
          <Input
            placeholder="수정을 하신 후 Enter 키를 입력하세요"
            value={cmtText}
            onChange={(e) => setCmtText(e.target.value)}
            onKeyDown={handleKeydown}
          />
        ) : (
          cmtData.comment
        )}
      </Msg>
    </Block>
  );
}

function CommentList() {
  const { reLoad, setReload, cmtList, setCmtList } = commentStore();
  const { specificdata } = postData();
  useEffect(async () => {
    if (specificdata && specificdata.length) {
      const response = await axios({
        method: "GET",
        url: "https://server.cocodus.site/board/cmt",
        params: {
          postId: specificdata[0].id,
        },
      });
      if (response.status === 200) {
        setCmtList(response.data);
      }
    }
  }, [reLoad, specificdata]);

  if (cmtList.length === 0) return null;
  return (
    <div>
      {cmtList.map((x, i) => (
        <CommentArea cmtData={x} key={"cmtData" + i} reLoad={reLoad} />
      ))}
    </div>
  );
}

export default CommentList;
