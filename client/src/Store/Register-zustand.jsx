import create from "zustand";

export const registerStore = create((set) => ({
  // 글 등록시 데이터들을 보관할 배열
  // inputsList: [],

  // 제목, 날짜, 온라인 여부 담는 객체
  inputs: {
    title: "",
    online: false,
  },

  recruiting: true,
  //모집중 onChange 함수
  chgrecruiting: (value) =>
    set((state) => ({
      recruiting: value,
    })),

  // 제목, 날짜, onChange 함수
  chgInput: (name, value) =>
    set((state) => ({
      inputs: { ...state.inputs, [name]: value },
    })),

  // 온라인 가능 onChange 함수
  chgOnline: (name, checked) =>
    set((state) => ({
      inputs: { ...state.inputs, [name]: checked },
    })),

  // 날짜, 시간, 분
  year: "",
  hour: "00",
  minute: "00",

  // 날짜 onChange 함수
  chgYear: (value) =>
    set((state) => ({
      year: value,
    })),

  // 시간 onChange 함수
  chgHour: (value) =>
    set((state) => ({
      hour: value,
    })),

  // 분 onChange 함수
  chgMin: (value) =>
    set((state) => ({
      minute: value,
    })),

  // 기술 스택 태그 담는 배열
  tag: [],

  // 기술 스택 onChange 함수
  chgTag: (opts) =>
    set((state) => ({
      tag: [...opts],
    })),

  // 글 내용 담는 문자열
  content: "",

  // 글 내용 onChange 함수
  chgMsg: (text) =>
    set((state) => ({
      content: text,
    })),

  // editorState: EditorState.createEmpty(),
  // onEditorStateChange: (value) =>
  //   set((state) => ({
  //     editorState: value,
  //   })),

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

  chgPlaceName: (value) =>
    set((state) => ({
      placeName: value.placeName,
      roadAddress: value.roadAddress,
      latitudeY: value.latitudeY,
      longitudeX: value.longitudeX,
    })),
}));
