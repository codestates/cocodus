import create from "zustand";

export const postData = create((set) => ({
  jsonData: [],
  // post_id: [],
  chgJsonData: (value) =>
    set((state) => ({
      jsonData: value,
    })),
  // chgPost_id: (value) =>
  //   set((state) => ({
  //     post_id: value,
  //   })),
}));
