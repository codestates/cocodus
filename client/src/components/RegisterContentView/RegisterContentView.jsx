// 게시글 조회 폼

import React, { useState, useEffect } from "react";
import { Section, Title, Div, FlexBox, Img } from "../Register/Register.styled";
import { ContentBlock, Language } from "./RegisterContentView.styled";
import Comment from "../Comment/Comment";
import LikesViewShareIcon from "../LikesViewShareIcon/LikesViewShareIcon";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import axios from "axios";
import { boardGetLoadingStore } from "../../Store/loading-zustand";
import { postData } from "../../Store/postData-zustand";

function DetailContent(props) {
  const { accessToken, cocodusId } = accessTokenStore();
  const { chgLoading, chgError } = boardGetLoadingStore();
  const { specificdata } = postData();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       // 요청이 시작 할 때에는 error 초기화하고
  //       chgError(null);
  //       // loading 상태를 true 로 바꿉니다.
  //       chgLoading(true);
  //       const response = await axios({
  //         method: "GET",
  //         url: "http://localhost:8080/board/list",
  //         data: {
  //           accessToken,
  //           user_id: cocodusId,
  //           // post_id: postId,
  //         },
  //       });
  //     } catch (e) {
  //       chgError(e);
  //     }
  //     chgLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <Section>
      {console.log(specificdata)}
      <Title
        color="transparent"
        textShadow="0 0 0 black"
        borderBottom="none"
        top="1rem"
        backGround="#fff"
        defaultValue={specificdata[0].jsonfile.title}
        readOnly
      />
      <FlexBox>
        <Img src="UserIcon.png" />
        <Div>{specificdata[0].jsonfile.nickName}</Div>
        <Div huge>2022-03-23</Div>
      </FlexBox>
      <FlexBox>
        <Div>사용 언어</Div>
        <Language>React.js</Language>
        <Language>Node.js</Language>
        {specificdata[0].jsonfile.online ? (
          <Div
            backColor="rgba(196, 196, 196, 0.26)"
            fontSize="16px"
            marginLeft="10rem"
          >
            온라인 가능
          </Div>
        ) : null}
      </FlexBox>
      <FlexBox>
        <Div>일시</Div>
        <Div backColor="rgba(196, 196, 196, 0.26)">
          {specificdata[0].jsonfile.date}
        </Div>
      </FlexBox>
      <ContentBlock>{specificdata[0].jsonfile.content}</ContentBlock>
      <FlexBox top="2rem">
        <Div>위치</Div>
        <Div backColor="rgba(196, 196, 196, 0.26)">
          {specificdata[0].jsonfile.roadAddress}{" "}
          {specificdata[0].jsonfile.placeName}
        </Div>
      </FlexBox>
      <LikesViewShareIcon />
      <Comment />
    </Section>
  );
}

export default DetailContent;
