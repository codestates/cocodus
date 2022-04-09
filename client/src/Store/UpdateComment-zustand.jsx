import create from "zustand";

export const updateCommentStore = create((set) => ({
  input: "",
  visible: false,
  visibleOpen: () =>
    set((state) => ({
      visible: true,
    })),
  visibleClose: () =>
    set((state) => ({
      visible: false,
    })),
  chgInput: (value) =>
    set((state) => ({
      input: value,
    })),
}));
