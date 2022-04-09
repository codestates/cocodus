// 게시글 조회 폼

import React, { useState, useEffect } from "react";
import { Section, Title, Div, FlexBox, Img } from "../Register/Register.styled";
import { ContentBlock, Language } from "./RegisterContentView.styled";
import Comment from "../Comment/Comment";
import LikesViewShareIcon from "../LikesViewShareIcon/LikesViewShareIcon";
import axios from "axios";
import { boardGetLoadingStore } from "../../Store/loading-zustand";
import { postData } from "../../Store/postData-zustand";
import { commentStore } from "../../Store/Comment-zustand";

function DetailContent(props) {
  const { addMsg } = commentStore();
  const { chgLoading, chgError } = boardGetLoadingStore();
  const { specificdata } = postData();

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8080/board/cmt",
        params: {
          postId: specificdata[0].id,
        },
      });
      addMsg(response.data);
      console.log(response.data);
    };
    fetchComments();
  }, []);

  return (
    <Section>
      {/* {console.log(specificdata[0].id)} */}
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
        <Img src="UserIcon7.png" />
        <Div>{specificdata[0].jsonfile.nickName}</Div>
        <Div huge>2022-03-23</Div>
      </FlexBox>
      <FlexBox>
        <Div>사용 언어</Div>
        {specificdata[0].jsonfile.tag.map((el, idx) => {
          return <Language key={idx}>{el}</Language>;
        })}
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
        <Div marginLeft="4rem">장소</Div>
        <Div backColor="rgba(196, 196, 196, 0.26)">
          {specificdata[0].jsonfile.roadAddress}{" "}
          {specificdata[0].jsonfile.placeName}
        </Div>
      </FlexBox>
      <ContentBlock>{specificdata[0].jsonfile.content}</ContentBlock>
      <LikesViewShareIcon />
      <Comment />
    </Section>
  );
}

export default DetailContent;
