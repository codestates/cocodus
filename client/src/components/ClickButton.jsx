import React from "react";
import { useNavigate } from "react-router-dom";
import { BtnGroup, Btn } from "./Register/Register.styled";
import {
  Logo,
  Subject,
  ModalFlexBox,
} from "./DeleteRegisterSubModal/DeleteModal.styled";
import { registerStore } from "../Store/Register-zustand";

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
  const { inputs, tag, content, placeName, roadAddress, year, hour, minute } =
    registerStore();
  const { title } = inputs;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      {/* 버튼 두개가 모두 모달이 필요할 때, 정보 수정  페이지 */}
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
      ) : /* 버튼 1개가 모달이 필요할 때  글 등록페이지*/
      click1 ? (
        <BtnGroup>
          <Btn onClick={goBack}>{click1}</Btn>
          <Btn onClick={store2().openModal2}>{click2}</Btn>
          {title &&
          tag &&
          content &&
          placeName &&
          roadAddress &&
          year &&
          hour ? (
            <Modal open={store2().modalOpen2} header="알림">
              <Tag closeModal={store2().closeModal2} />
            </Modal>
          ) : (
            /* 등록페이지에 정보를 다 기입하지 않았을 경우 */
            <Modal
              open={store2().modalOpen2}
              close={store2().closeModal2}
              header="알림"
            >
              <ModalFlexBox>
                <Logo src="logo2.png" alt="" />
                <Subject>정보를 양식에 맞게 작성해주세요</Subject>
              </ModalFlexBox>
            </Modal>
          )}
        </BtnGroup>
      ) : (
        /* 초기 회원가입시 회원 정보 등록 페이지 */
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
