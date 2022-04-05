import React from "react";
import { BtnGroup, Btn } from "./Register/Register.styled";
import {
  Logo,
  Subject,
  ModalFlexBox,
} from "./DeleteRegisterSubModal/DeleteModal.styled";

function ClickButton({
  click1,
  click2,
  Modal,
  store1,
  openModal,
  store2,
  text,
  Tag,
}) {
  return (
    <>
      {/* 버튼 두개가 모두 모달이 필요할 때 */}
      {store1 ? (
        <BtnGroup>
          <Btn onClick={openModal}>{click1}</Btn>
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
      ) : /* 버튼 1개가 모달이 필요할 때 */
      click1 ? (
        <BtnGroup>
          <Btn>{click1}</Btn>
          <Btn onClick={store2().openModal2}>{click2}</Btn>
          <Modal open={store2().modalOpen2} header="알림">
            <Tag closeModal={store2().closeModal2} />
          </Modal>
        </BtnGroup>
      ) : (
        <BtnGroup>
          <Btn onClick={store2().openModal2}>{click2}</Btn>
          <Modal open={store2().modalOpen2} header="알림">
            <Tag closeModal={store2().closeModal2} />
          </Modal>
        </BtnGroup>
      )}
    </>
  );
}

export default ClickButton;
