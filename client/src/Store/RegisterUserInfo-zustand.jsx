import create from "zustand";
import { persist } from "zustand/middleware";

export const registerUserInfoStore = create(
  persist(
    (set) => ({
      userImg: "UserIcon7.png",
      // 유정 정보 등록에 들어가는 닉네임
      nickName: "",
      // 기술 스택을 담은 배열
      tag: [],

      // 유저 이미지 onChange 함수
      chgImg: (img) =>
        set((state) => ({
          userImg: img,
        })),

      // 유저 이미지 제거 함수
      delImg: () =>
        set((state) => ({
          userImg: "UserIcon7.png",
        })),

      // 닉네임 onChange 함수
      chgInput: (value) =>
        set((state) => ({
          nickName: value,
        })),

      // 기술 스택 onChange 함수
      chgTag: (opts) =>
        set((state) => ({
          tag: [...opts],
        })),

      // 지도(주소) 관련 변수
      // 검색명
      place: "",
      // 마커 즉, 검색한 주소의 정보가 담긴 객체
      markerNow: {},
      // 상호명
      placeName: "",
      // 도로명 주소
      roadAddress: "",
      // 위도(y), 경도(x)
      latitudeY: "",
      longitudeX: "",

      // place onChange 함수
      chgPlace: (value) =>
        set((state) => ({
          place: value,
        })),

      // markerNow onChange 함수
      chgMarker: (value) =>
        set((state) => ({
          markerNow: value,
          placeName: value.place_name,
          roadAddress: value.road_address_name,
          latitudeY: value.y,
          longitudeX: value.x,
        })),
    }),
    {
      name: "userInfo",
      getStorage: () => sessionStorage, //세션에 저장
    }
  )
);
