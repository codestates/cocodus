import create from "zustand";

export const commentStore = create((set) => ({
  inputs: "",
  commentList: [],
  chgMsg: (value) =>
    set((state) => ({
      inputs: value,
    })),
  addMsg: (msg, id) =>
    set((state) => ({
      commentList: [...state.commentList, { id, msg }],
      inputs: "",
    })),
  removeMsg: (id) =>
    set((state) => ({
      commentList: state.commentList.filter((el) => {
        return el.id !== id;
      }),
    })),
  updateMsg: (newMsg, id) =>
    set((state) => ({
      commentList: state.commentList.map((el) => {
        return el.id === id ? { ...el, msg: newMsg } : el;
      }),
    })),
}));
