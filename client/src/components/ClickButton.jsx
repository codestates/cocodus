import React from "react";
import { BtnGroup, Btn } from "./Register/Register.styled";
import DeleteUserModal from "./DeleteRegisterSubModal/DeleteUserModal";
import {
  Logo,
  Subject,
  ModalFlexBox,
} from "./DeleteRegisterSubModal/DeleteModal.styled";

function ClickButton({ click1, click2, Modal, store1, store2, text, Tag }) {
  return (
    <>
      {store1 ? (
        <BtnGroup>
          <Btn onClick={store1().openModal}>{click1}</Btn>
          <Modal
            open={store1().modalOpen}
            close={store1().closeModal}
            header="알림"
          >
            <ModalFlexBox>
              <Logo src="logo2.png" alt="" />
              <Subject>{text} 완료되었습니다</Subject>
            </ModalFlexBox>
          </Modal>
          <Btn onClick={store2().openModal2}>{click2}</Btn>
          <Modal open={store2().modalOpen2} header="알림">
            <Tag closeModal={store2().closeModal2} />
          </Modal>
        </BtnGroup>
      ) : (
        <BtnGroup>
          <Btn>{click1}</Btn>
          <Btn onClick={store2().openModal2}>{click2}</Btn>
          <Modal open={store2().modalOpen2} header="알림">
            <Tag closeModal={store2().closeModal2} />
          </Modal>
        </BtnGroup>
      )}
    </>
    //   <BtnGroup>
    //   <Btn>{click1}</Btn>
    //   <Btn>{click2}</Btn>
    // </BtnGroup>
  );
}

export default ClickButton;
