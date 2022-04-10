import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { myPostGetLoadingStore } from "../../Store/loading-zustand";
import { Section } from "../styles/Section.styled";
import WriteIcon from "../WriteIcon/WriteIcon";
import {
  Block,
  IconAndText,
  Icon,
  Title,
  Card,
  ContentDiv,
  Container,
  Flex,
  PlanTitle,
  BackgroundSqure,
  DivContainer,
  DateAndLocationContainer,
  FeatureListItem,
} from "./MyPost.styled";

function MyPost(props) {
  const { chgLoading, chgError } = myPostGetLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();
  const [myPost, setMyPost] = useState([]);
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
        mypost: true,
      },
    });
    if (response.status === 200) setMyPost(response.data);
    chgLoading(false);
  }, []);

  return (
    <Section>
      <Block>
        <IconAndText>
          <Icon>
            <BsPencil size={30} />
          </Icon>
          <Title>작성한 글</Title>
        </IconAndText>
      </Block>
      <WriteIcon />
      {myPost.length
        ? myPost.map((x, i) => {
            let temp = x.jsonfile;
            if (typeof temp === "string") temp = JSON.parse(x.jsonfile);
            return (
              <Container>
                <Flex>
                  <Card>
                    <BackgroundSqure />{" "}
                    <div key={i}>
                      <ContentDiv>
                        <DivContainer>
                          <div>{temp.nickName}</div>
                          <PlanTitle>{temp.title}</PlanTitle>
                          <FeatureListItem>{temp.content}</FeatureListItem>
                        </DivContainer>
                        <DivContainer>
                          <DateAndLocationContainer>
                            <div>{temp.date}</div>
                            <div>{temp.location}</div>
                            <div>{temp.roadAddress}</div>
                          </DateAndLocationContainer>
                        </DivContainer>
                      </ContentDiv>{" "}
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

export default MyPost;
