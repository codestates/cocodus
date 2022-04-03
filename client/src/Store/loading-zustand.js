import create from "zustand";

export const userinfoLoadingStore = create((set) => ({
  loading: false,
  error: null,
  chgLoading: (value) =>
    set((state) => ({
      loading: value,
    })),
  chgError: (value) =>
    set((state) => ({
      error: value,
    })),
}));
