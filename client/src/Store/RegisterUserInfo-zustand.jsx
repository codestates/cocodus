import create from "zustand";

export const registerUserInfoStore = create((set) => ({
  userImg: "UserIcon.png",
  // 유정 정보 등록에 들어가는 닉네임
  nickName: "",
  // 기술 스택을 담은 배열
  tag: [],

  // 유저 이미지 onChange 함수
  chgImg: (img) =>
    set((state) => ({
      userImg: img,
    })),

  // 유저 이미지 제거 함수
  delImg: (img) =>
    set((state) => ({
      userImg: "UserIcon.png",
    })),

  // 닉네임 onChange 함수
  chgInput: (value) =>
    set((state) => ({
      nickName: value,
    })),

  // 기술 스택 onChange 함수
  chgTag: (opts) =>
    set((state) => ({
      tag: [...opts],
    })),
}));
