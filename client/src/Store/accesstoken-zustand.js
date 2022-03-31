import create from "zustand";

export const accessTokenStore = create((set) => ({
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
}));
