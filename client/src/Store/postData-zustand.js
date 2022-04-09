import create from "zustand";
import { persist } from "zustand/middleware";

// export const postData = create((set) => ({
//   jsonData: [],
//   specificData: [],
//   // post_id: [],
//   chgJsonData: (value) =>
//     set((state) => ({
//       jsonData: value,
//     })),
//   chgSpecificData: (arr) =>
//     set((state) => ({
//       specificdata: [...arr],
//     })),
// }));

export const postData = create(
  persist(
    (set) => ({
      // 등록된 데이터들 뭉치로 받는 배열
      jsonData: [],
      // 특정 데이터만 발췌해서 받는 배열
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
