import create from "zustand";

export const postData = create((set) => ({
  data: [],

  chgData: (value) =>
    set((state) => ({
      data: value,
    })),
}));
