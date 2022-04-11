// 게시글 조회 폼

import React, { useState, useEffect, useCallback } from "react";
import { Section, Title, Div, FlexBox, Img } from "../Register/Register.styled";
import { ContentBlock, Language } from "./RegisterContentView.styled";
import Comment from "../Comment/Comment";
import LikesViewShareIcon from "../LikesViewShareIcon/LikesViewShareIcon";
import axios from "axios";
import { boardGetLoadingStore } from "../../Store/loading-zustand";
import { postData } from "../../Store/postData-zustand";
import { commentStore } from "../../Store/Comment-zustand";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { registerUserInfoStore } from "../../Store/RegisterUserInfo-zustand";
function DetailContent() {
  const { chgLoading, chgError } = boardGetLoadingStore();
  const { isLogin, accessToken, cocodusId } = accessTokenStore();
  const { nickName } = registerUserInfoStore();
  const { specificdata } = postData();
  const [jsonData, setJsonData] = useState({});

  useEffect(async () => {
    if (specificdata && specificdata[0]) {
      setJsonData(specificdata[0].jsonfile);
    }
  }, [specificdata]);

  return (
    <Section>
      <Title
        color="transparent"
        textShadow="0 0 0 black"
        borderBottom="none"
        top="1rem"
        backGround="#fff"
        defaultValue={jsonData.title}
        readOnly
      />
      <FlexBox>
        <Img src="UserIcon7.png" />
        <Div>{jsonData.nickName}</Div>
        {/* <Div huge>2022-03-23</Div> */}
      </FlexBox>
      <FlexBox>
        <Div>사용 언어</Div>
        {jsonData.tag &&
          jsonData.tag.map((el, idx) => {
            return <Language key={idx}>{el}</Language>;
          })}
        {jsonData.online ? (
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
        <Div backColor="rgba(196, 196, 196, 0.26)">{jsonData.date}</Div>
        <Div marginLeft="4rem">장소</Div>
        <Div backColor="rgba(196, 196, 196, 0.26)">
          {jsonData.roadAddress} {jsonData.placeName}
        </Div>
      </FlexBox>
      <ContentBlock>{jsonData.content}</ContentBlock>
      <LikesViewShareIcon />
      <Comment />
    </Section>
  );
}

export default DetailContent;
