import create from "zustand";
import { persist } from "zustand/middleware";
export const accessTokenStore = create(
  persist(
    (set) => ({
      isLogin: false,
      accessToken: "",
      cocodusId: "",
      chgIsLogin: (value) =>
        set((state) => ({
          isLogin: value,
        })),
      chgAccToken: (value) =>
        set((state) => ({
          accessToken: value,
        })),
      chgCocoId: (value) =>
        set((state) => ({
          cocodusId: value,
        })),
    }),
    {
      name: "tokenAndId",
      getStorage: () => sessionStorage, //세션에 저장
    }
  )
);
