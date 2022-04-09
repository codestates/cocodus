"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          user_id: "github+happy5happy5",
          jsonfile:
            '{"cocodusId":"github+happy5happy5","nickName":"윤종복","title":"리액트 모각코 하실 분","content":"모각코 구함요(<br>Lorem Ipsum is simply dummy text of the prin ting and typesetting industryLorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["React","JavaScript","TypeScript","Flutter","Ruby","Swift","C#","C++"],"roadAddress":"서울 종로구 대학로11길 40","location":"카페선선혜화","lat":"37.5824487","long":"126.9996739","date":"2022년 3월 18일 오후 6시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5824163",
          long: "126.9996541",
        },
        {
          user_id: "github+happy5happy5",
          jsonfile:
            '{"cocodusId":"github+happy5happy5","nickName":"윤종복","title":"리액트 하실 분","content":"리액트로 함께할 멤버를 구합니다. Lorem Ipsum is simply dummy text of the prin ting and typesetting iLorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["React","JavaScript","TypeScript"],"roadAddress":"서울 종로구 창경궁로 26길","placeName":"카페 키이로","lat":"37.5821065","long":"126.9997467","date":"2022년 3월 20일 오후 9시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5821065",
          long: "126.9997467",
        },
        {
          user_id: "github+sun-one95",
          jsonfile:
            '{"cocodusId":"github+sun-one95","nickName":"수닐","title":"자바스크립트 하실 분","content":"자바스크립트로 토이 공부 하실분 모십니다. Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":false,"tag":["JavaScript","Node.js"],"roadAddress":"서울 종로구 관훈동 인사동길 45-1","placeName":"오설록 티하우스 인사동점","lat":"37.5742461","long":"126.9842955","date":"2022년 3월 21일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5742461",
          long: "126.9842955",
        },
        {
          user_id: "github+sun-one95",
          jsonfile:
            '{"cocodusId":"github+sun-one95","nickName":"수닐","title":"자바스크립트로 창업하실 분 모십니다","content":"자바스크립트로 창업 하실분??. Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["JavaScript","Java"],"roadAddress":"서울 강남구 논현로 26길 46-8","placeName":"원표셰","lat":"37.4834906","long":"127.0461335","date":"2022년 3월 18일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.4834906",
          long: "127.0461335",
        },
        {
          user_id: "github+happy5happy5",
          jsonfile:
            '{"cocodusId":"github+happy5happy5","nickName":"윤종복","title":"타입스크립트 스터디원","content":"타입스크립트 스터디 모임 만들고 있습니다. Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["TypeScript"],"roadAddress":"경기도 과천시 주암동 19-12","placeName":"스테이블 14","lat":"37.4583932","long":"127.0340263","date":"2022년 3월 20일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.4583932",
          long: "127.0340263",
        },
        {
          user_id: "github+happy5happy5",
          jsonfile:
            '{"cocodusId":"github+happy5happy5","nickName":"윤종복","title":"타입스크립트 공부모임","content":"타입스크립트로 공부하실 분들을 찾고 있습니다. Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":false,"tag":["TypeScript","JavaScript"],"roadAddress":"강원도 횡성군 서원면 금대리","placeName":"금대리 야산","lat":"37.5068699","long":"127.9113692","date":"2022년 3월 20일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5068699",
          long: "127.9113692",
        },
        {
          user_id: "github+sun-one95",
          jsonfile:
            '{"cocodusId":"github+sun-one95","nickName":"수닐","title":"자바 공부하실분","content":"자바로 공부하실 분들을 모십니다. Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["Java"],"roadAddress":"서울시 양천구 목동중앙북로 54-1","placeName":"카페나","lat":"37.5471689","long":"127.8692508","date":"2022년 3월 21일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5471689",
          long: "127.8692508",
        },
        {
          user_id: "github+sun-one95",
          jsonfile:
            '{"cocodusId":"github+sun-one95","nickName":"수닐","title":"GO 공부하실분","content":"GO 공부하실 분들을 모십니다. Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["Go"],"roadAddress":"서울시 서대문구 연희로 10길 64","placeName":"바벨의 도서관","lat":"37.5644011","long":"126.9327240","date":"2022년 4월 5일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5644011",
          long: "126.9327240",
        },
        {
          user_id: "github+happy5happy5",
          jsonfile:
            '{"cocodusId":"github+happy5happy5","nickName":"윤종복","title":"코틀린 공부하실분","content":"코틀린 공부하실 분들을 모십니다. Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":false,"tag":["Kotlin"],"roadAddress":"서울시 서대문구 남가좌2동 거북골로 21","placeName":"어라운드 스터디카페","lat":"37.5801071","long":"126.9249667","date":"2022년 4월 7일 오후 8시"}',
          recruiting: 0,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5801071",
          long: "126.9249667",
        },
        {
          user_id: "github+happy5happy5",
          jsonfile:
            '{"cocodusId":"github+happy5happy5","nickName":"윤종복","title":"뷰 공부하는 사람들 모여주세요","content":"뷰 공부하실 분들을 모십니다. Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["Vue"],"roadAddress":"서울시 서초구 강남대로 51길","placeName":"브루티코","lat":"37.4911461","long":"126.0300560","date":"2022년 4월 8일 오후 5시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.4911461",
          long: "126.0300560",
        },
        {
          user_id: "github+sun-one95",
          jsonfile:
            '{"cocodusId":"github+sun-one95","nickName":"수닐","title":"뷰로 취뽀 하고 싶으신 분","content":"뷰를 공부해서 취뽀 하고 싶은 분들을 모십니다 Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["Vue","Spring"],"roadAddress":"서울시 서초구 방배4동 방배로 32길 30-9","placeName":"카페 노티드 서래","lat":"37.4913310","long":"126.9934368","date":"2022년 4월 10일 오후 2시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.4913310",
          long: "126.9934368",
        },
        {
          user_id: "github+sun-one95",
          jsonfile:
            '{"cocodusId":"github+sun-one95","nickName":"수닐","title":"노드로 공부하고 싶으신 분","content":"노드짱노드짱짱맨 Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["Node.js","Java"],"roadAddress":"서울시 서초구 방배천로4안길 61","placeName":"크로플마을 방배점","lat":"37.4807590","long":"126.9832508","date":"2022년 4월 12일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.4807590",
          long: "126.9832508",
        },
        {
          user_id: "github+happy5happy5",
          jsonfile:
            '{"cocodusId":"github+happy5happy5","nickName":"윤종복","title":"공대 공학 C로 공부하고 싶으신 분","content":"최강공대 공대공학 C Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["C","C#"],"roadAddress":"서울시 관악구 봉천동 봉천로 585","placeName":"이알로스터즈","lat":"37.4769213","long":"126.9626380","date":"2022년 4월 15일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.4769213",
          long: "126.9626380",
        },
        {
          user_id: "github+happy5happy5",
          jsonfile:
            '{"cocodusId":"github+happy5happy5","nickName":"윤종복","title":"C로 취업하고 싶으신 분","content":"취뽀취뽀 C Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":false,"tag":["C","C++"],"roadAddress":"서울시 관악구 난곡로 327","placeName":"카페온정","lat":"37.4832054","long":"126.9140568","date":"2022년 4월 16일 오후 6시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.4832054",
          long: "126.9140568",
        },
        {
          user_id: "github+sun-one95",
          jsonfile:
            '{"cocodusId":"github+sun-one95","nickName":"수닐","title":"파이썬 모각코 모임 ","content":"파이썬이 취업 제일 잘 됨. 그러니 ㄱㄱC Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":true,"tag":["Python"],"roadAddress":"서울시 강서구 마곡중앙6로 21","placeName":"프롬커피","lat":"37.5608480","long":"126.8282617","date":"2022년 4월 16일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5608480",
          long: "126.8282617",
        },
        {
          user_id: "github+sun-one95",
          jsonfile:
            '{"cocodusId":"github+sun-one95","nickName":"수닐","title":"파이썬 토이프로젝트 ","content":"파이썬이 토이프로젝트 할거임C Lorem Ipsum is simply dummy text of the prin ting and typesetting industry.","online":false,"tag":["Python","Spring"],"roadAddress":"서울시 강서구 개화동로 19길 18","placeName":"고양이정원","lat":"37.5756595","long":"126.8030663","date":"2022년 4월 17일 오후 8시"}',
          recruiting: 1,
          online: 0,
          veiw_count: 0,
          total_like: 0,
          total_comment: 0,
          lat: "37.5756595",
          long: "126.8030663",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
