import create from "zustand";

export const postData = create((set) => ({
  jsonData: [],
  specificData: [],
  // post_id: [],
  chgJsonData: (value) =>
    set((state) => ({
      jsonData: value,
    })),
  chgSpecificData: (arr) =>
    set((state) => ({
      specificdata: [...arr],
    })),
}));
