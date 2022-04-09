import create from "zustand";
import { persist } from "zustand/middleware";

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
