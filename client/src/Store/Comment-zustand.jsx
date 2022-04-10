import create from "zustand";
import { persist } from "zustand/middleware";

export const commentStore = create(
  persist(
    (set) => ({
      inputs: "",
      commentList: [],
      reLoad: false,
      cmtList: [],

      setCmtList: (value) =>
        set((state) => ({
          cmtList: value,
        })),
      setReload: (value) =>
        set((state) => ({
          reLoad: !state.reLoad,
        })),
      //댓글 변경
      chgMsg: (value) =>
        set((state) => ({
          inputs: value,
        })),

      //댓글 추가
      addMsg: (arr) =>
        set((state) => ({
          commentList: [...arr],
          inputs: "",
        })),
      //댓글 삭제
      removeMsg: (id) =>
        set((state) => ({
          commentList: state.commentList.filter((el) => {
            return el.id !== id;
          }),
        })),
      //댓글 수정
      updateMsg: (newMsg, id) =>
        set((state) => ({
          commentList: state.commentList.map((el) => {
            return el.id === id ? { ...el, msg: newMsg } : el;
          }),
        })),
    }),
    {
      name: "cmtData",
      getStorage: () => sessionStorage, //세션에 저장
    }
  )
);
