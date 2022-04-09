import create from "zustand";
import { persist } from "zustand/middleware";

export const updateCommentStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: "updateComment",
      getStorage: () => sessionStorage, //세션에 저장
    }
  )
);
