import create from "zustand";

export const commentStore = create((set) => ({
  inputs: "",
  commentList: [],
  //댓글 변경
  chgMsg: (value) =>
    set((state) => ({
      inputs: value,
    })),

  //댓글 추가
  addMsg: (msg, id) =>
    set((state) => ({
      commentList: [...state.commentList, { id, msg }],
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
}));
