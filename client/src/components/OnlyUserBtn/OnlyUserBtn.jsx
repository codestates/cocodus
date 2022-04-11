import React from "react";
import { UserBlock } from "./OnlyUserBtn.styled";
import { Button } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";
import {
  boardDeleteLoadingStore,
  myPostClosedLoadingStore,
} from "../../Store/loading-zustand";
import {
  closedPostModalStore,
  delPostModalStore,
} from "../../Store/Modal-zustand";
import Modal from "../Modal/Modal";
import ClosedPostModal from "../DeleteRegisterSubModal/ClosedPostModal";
import DelPostModal from "../DeleteRegisterSubModal/DelPostModal";
import { registerStore } from "../../Store/Register-zustand";

function OnlyUserBtn(props) {
  const { closedModalOpen, openModal1, closeModal1 } = closedPostModalStore();
  const { delModalOpen, openModal2, closeModal2 } = delPostModalStore();
  const { recruiting, chgrecruiting } = registerStore();
  let navigate = useNavigate();
  return (
    <UserBlock>
      {recruiting ? ( //서버 완성되면 확인 필요함
        <Button onClick={openModal1}>마감하기</Button>
      ) : (
        <Button>모집하기</Button>
      )}

      <Modal open={closedModalOpen} close={closeModal1} header="알림">
        <ClosedPostModal closeModal={closeModal1} />
      </Modal>
      <Button onClick={() => navigate("/registeredit")}>수정</Button>
      <Button onClick={openModal2}>삭제</Button>
      <Modal open={delModalOpen} header="알림">
        <DelPostModal closeModal={closeModal2} />
      </Modal>
    </UserBlock>
  );
}

export default OnlyUserBtn;
