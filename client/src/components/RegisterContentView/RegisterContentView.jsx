// 게시글 조회 폼

import React, { useState, useEffect } from "react";
import { Section, Title, Div, FlexBox, Img } from "../Register/Register.styled";
import { ContentBlock, Language } from "./RegisterContentView.styled";
import Comment from "../Comment/Comment";
import LikesViewShareIcon from "../LikesViewShareIcon/LikesViewShareIcon";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import axios from "axios";
import { boardGetLoadingStore } from "../../Store/loading-zustand";

function DetailContent(props) {
  const { accessToken, cocodusId } = accessTokenStore();
  const { chgLoading, chgError } = boardGetLoadingStore();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 요청이 시작 할 때에는 error 초기화하고
        chgError(null);
        // loading 상태를 true 로 바꿉니다.
        chgLoading(true);
        const response = await axios({
          method: "GET",
          url: "http://localhost:8080/board/list",
          data: {
            accessToken,
            user_id: cocodusId,
            // post_id: postId,
          },
        });
      } catch (e) {
        chgError(e);
      }
      chgLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <Section>
      <Title
        color="transparent"
        textShadow="0 0 0 black"
        borderBottom="none"
        top="1rem"
        backGround="#fff"
        defaultValue="React 스터디 모집합니다."
        readOnly
      />
      <FlexBox>
        <Img src="UserIcon.png" />
        <Div>김코딩</Div>
        <Div huge>2022-03-23</Div>
      </FlexBox>
      <FlexBox>
        <Div>사용 언어</Div>
        <Language>React.js</Language>
        <Language>Node.js</Language>
        <Div
          backColor="rgba(196, 196, 196, 0.26)"
          fontSize="16px"
          marginLeft="10rem"
        >
          온라인 가능
        </Div>
      </FlexBox>
      <FlexBox>
        <Div>일시</Div>
        <Div backColor="rgba(196, 196, 196, 0.26)">04월 12일 오후 2시</Div>
      </FlexBox>
      <ContentBlock>
        안녕하세요. 리액트 스터디 모집합니다. 부지런하신분들 연락주세요
        오픈카톡:링크1 로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나
        그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나
        시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에
        들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인 프로젝트 모형의
        채움 글로도 이용된다. 이런 용도로 사용할 때 로렘 입숨을
        그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만 차지하는
        무언가를 지칭하는 용어로도 사용된다. 로렘 입숨은 전통 라틴어와 닮은 점
        때문에 종종 호기심을 유발하기도 하지만 그 이상의 의미를 담지는 않는다.
        문서에서 텍스트가 보이면 사람들은 전체적인 프레젠테이션보다는 텍스트에
        담긴 뜻에 집중하는 경향이 있어서 출판사들은 서체나 디자인을 보일 때는
        프레젠테이션 자체에 초점을 맞추기 위해 로렘 입숨을 사용한다. 로렘 입숨은
        영어에서 사용하는 문자들의 전형적인 분포에 근접하다고도 하는데, 이 점
        때문에 프레젠테이션으로 초점을 이동하는 데에도 도움을 준다. 안녕하세요.
        리액트 스터디 모집합니다. 부지런하신분들 연락주세요 오픈카톡:링크1 로렘
        입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽 디자인 분야에서
        폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때
        사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장
        내용이 채워지기 전에 시각 디자인 프로젝트 모형의 채움 글로도 이용된다.
        이런 용도로 사용할 때 로렘 입숨을 그리킹(greeking)이라고도 부르며, 때로
        로렘 입숨은 공간만 차지하는 무언가를 지칭하는 용어로도 사용된다. 로렘
        입숨은 전통 라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그
        이상의 의미를 담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인
        프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서 출판사들은
        서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을 맞추기 위해 로렘
        입숨을 사용한다. 로렘 입숨은 영어에서 사용하는 문자들의 전형적인 분포에
        근접하다고도 하는데, 이 점 때문에 프레젠테이션으로 초점을 이동하는
        데에도 도움을 준다.
      </ContentBlock>
      <FlexBox top="2rem">
        <Div>위치</Div>
        <Div backColor="rgba(196, 196, 196, 0.26)">
          서울 서대문구 연희로 32 만동제과
        </Div>
      </FlexBox>
      <LikesViewShareIcon />
      <Comment />
    </Section>
  );
}

export default DetailContent;
