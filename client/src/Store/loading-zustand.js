import create from "zustand";

// 사용자 정보 등록 할때 로딩
export const userinfoPostLoadingStore = create((set) => ({
  loading1: false,
  error1: null,
  chgLoading: (value) =>
    set((state) => ({
      loading1: value,
    })),
  chgError: (value) =>
    set((state) => ({
      error1: value,
    })),
}));

// 게시판 글 등록할 때 로딩
export const boardPostLoadingStore = create((set) => ({
  loading2: false,
  error2: null,
  chgLoading: (value) =>
    set((state) => ({
      loading2: value,
    })),
  chgError: (value) =>
    set((state) => ({
      error2: value,
    })),
}));

// 게시판 글 수정할 때 로딩
export const boardPatchLoadingStore = create((set) => ({
  loading3: false,
  error3: null,
  chgLoading: (value) =>
    set((state) => ({
      loading3: value,
    })),
  chgError: (value) =>
    set((state) => ({
      error3: value,
    })),
}));

// 게시판 글 삭제할 때 로딩
export const boardDeleteLoadingStore = create((set) => ({
  loading4: false,
  error4: null,
  chgLoading4: (value) =>
    set((state) => ({
      loading4: value,
    })),
  chgError4: (value) =>
    set((state) => ({
      error4: value,
    })),
}));

// 내가 좋아요한 글 조회할 때 로딩
export const likeGetLoadingStore = create((set) => ({
  loading5: false,
  error5: null,
  chgLoading: (value) =>
    set((state) => ({
      loading5: value,
    })),
  chgError: (value) =>
    set((state) => ({
      error5: value,
    })),
}));

// 내가 작성한 글 조회할 때 로딩
export const boardGetLoadingStore = create((set) => ({
  loading6: false,
  error6: null,
  chgLoading: (value) =>
    set((state) => ({
      loading6: value,
    })),
  chgError: (value) =>
    set((state) => ({
      error6: value,
    })),
}));

// 게시판 글 조회할 때 로딩
export const myPostGetLoadingStore = create((set) => ({
  loading7: false,
  error7: null,
  chgLoading: (value) =>
    set((state) => ({
      loading7: value,
    })),
  chgError: (value) =>
    set((state) => ({
      error7: value,
    })),
}));

// 게시판 글 마감 처리할 때 로딩
export const myPostClosedLoadingStore = create((set) => ({
  loading8: false,
  error8: null,
  chgLoading: (value) =>
    set((state) => ({
      loading8: value,
    })),
  chgError: (value) =>
    set((state) => ({
      error8: value,
    })),
}));
