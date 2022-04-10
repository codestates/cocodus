import create from "zustand";

export const appScrollStore = create((set) => ({
  howMany: [0, 5],

  setHowMany: (value) =>
    set((state) => ({
      howMany: [state.howMany[0], state.howMany[1] + value],
    })),
}));
