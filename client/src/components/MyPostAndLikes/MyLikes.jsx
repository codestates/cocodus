import React, { useState, useEffect } from "react";
import { Section } from "../styles/Section.styled";
import { AiOutlineRead, AiOutlineLike } from "react-icons/ai";
import WriteIcon from "../WriteIcon/WriteIcon";
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { likeGetLoadingStore } from "../../Store/loading-zustand";
import styled from "styled-components";
import {
  IconAndText,
  Icon,
  Title,
  Block,
  Card,
  ContentDiv,
  Container,
  Flex,
  PlanTitle,
  BackgroundSqure,
  DivContainer,
  DateAndLocationContainer,
  FeatureListItem,
} from "./MyLikes.styled";
function Mylikes(props) {
  const [visible, setVisible] = useState(false);
  const [myLike, setMyLike] = useState([]);
  const onLikesList = () => {
    setVisible(true);
  };
  const onViewList = () => {
    setVisible(false);
  };

  const { accessToken, cocodusId } = accessTokenStore();
  const { chgLoading, chgError } = likeGetLoadingStore();

  useEffect(async () => {
    // 요청이 시작 할 때에는 error 초기화하고
    chgError(null);
    // loading 상태를 true 로 바꿉니다.
    chgLoading(true);
    const response = await axios({
      method: "GET",
      url: "https://server.cocodus.site/board/all",
      params: {
        // accessToken,
        cocodusId,
        mylike: visible,
        myread: !visible,
      },
    });
    if (response.status === 200) setMyLike(response.data);

    chgLoading(false);
  }, [visible]);

  return (
    <Section>
      <Block>
        <IconAndText
          shadow
          onClick={onViewList}
          opacity={`${visible ? "0.5" : "1"}`}
        >
          <Icon>
            <AiOutlineRead size={30} />
          </Icon>
          <Title>읽은 목록</Title>
          {!visible && <div>읽은 목록입니다.</div>}
        </IconAndText>
        <IconAndText
          shadow
          onClick={onLikesList}
          opacity={`${!visible ? "0.5" : "1"}`}
        >
          <Icon>
            <AiOutlineLike size={30} />
          </Icon>
          <Title>좋아요 목록</Title>
          {visible && <div>좋아요 목록입니다.</div>}
        </IconAndText>
        <WriteIcon />
      </Block>
      {myLike.length
        ? myLike.map((x, i) => {
            return (
              <Container>
                <Flex>
                  <Card>
                    <BackgroundSqure />
                    <div key={i}>
                      <ContentDiv>
                        <DivContainer>
                          <div>{x.jsonfile.nickName}</div>
                          <PlanTitle>{x.jsonfile.title}</PlanTitle>
                          <FeatureListItem>
                            {x.jsonfile.content}
                          </FeatureListItem>
                        </DivContainer>
                        <DivContainer>
                          <DateAndLocationContainer>
                            <div>{x.jsonfile.date}</div>
                            <div>{x.jsonfile.location}</div>
                            <div>{x.jsonfile.roadAddress}</div>
                          </DateAndLocationContainer>
                        </DivContainer>
                      </ContentDiv>
                    </div>
                  </Card>
                </Flex>
              </Container>
            );
          })
        : null}
    </Section>
  );
}

export default Mylikes;
