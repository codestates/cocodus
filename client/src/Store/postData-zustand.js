import create from "zustand";
import { persist } from "zustand/middleware";

export const postData = create(
  persist(
    (set) => ({
      jsonData: [],
      specificdata: [],
      // post_id: [],
      chgJsonData: (value) =>
        set((state) => ({
          jsonData: value,
        })),
      chgSpecificData: (arr) =>
        set((state) => ({
          specificdata: [...arr],
        })),
    }),
    {
      name: "postData",
      getStorage: () => sessionStorage, //세션에 저장
    }
  )
);
