import React, { useEffect, useState, useCallback } from "react";
import {
  Card,
  ContentDiv,
  PlanTitle,
  FeatureListItem,
  Icon,
  BackgroundSqure,
  DivContainer,
  Align,
  MapButton,
} from "./styles/PriceCard.styled";

import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import Data from "../api/DummyData";
import axios from "axios";
import { accessTokenStore } from "../Store/accesstoken-zustand";
import { registerUserInfoStore } from "../Store/RegisterUserInfo-zustand";
import { postData } from "../Store/postData-zustand";
function PriceCard({ stack = [] }) {
  const { data, chgData } = postData();
  const { isLogin, accessToken, cocodusId } = accessTokenStore();
  const { nickName, chgInput } = registerUserInfoStore();
  // console.log({ isLogin, accessToken, cocodusId, nickName });
  useEffect(async () => {
    let temp = await axios({
      url: "http://localhost:8080/board/all",
      params: {
        isLogin: isLogin,
        accessToken,
        cocodusId,
        nickName,
      },
    });

    if (temp.data) {
      chgData(
        temp.data.map((x) =>
          typeof x.jsonfile === "string" ? JSON.parse(x.jsonfile) : x.jsonfile
        )
      );
    }
  }, [isLogin, nickName]);

  return (
    <div>
      {stack.length
        ? data
            .filter((x) => stack.indexOf(x.tag) > -1)
            .map((x, i) => <CardSection data={x} key={"CardSection" + i} />)
        : data.map((x, i) => <CardSection data={x} key={"CardSection" + i} />)}
    </div>
  );
}

function CardSection(props) {
  const [like, setLike] = useState(0);
  return (
    <Container>
      <Flex>
        <Card>
          <BackgroundSqure />
          <ContentDiv>
            <DivContainer>
              <Icon src="React-icon.svg.png" />
            </DivContainer>
            <DivContainer>
              <PlanTitle>{props.data.title}</PlanTitle>
              <FeatureListItem>
                <span>{props.data.content}</span>
              </FeatureListItem>

              <span
                onClick={() => {
                  setLike(like + 1);
                }}
              >
                ♥️{like}
              </span>
              <span>👀</span>
            </DivContainer>
            <DivContainer>
              {props.data.date}
              <br></br>
              {props.data.roadAddress}
              {/*//도로명으로 바꾸고, 도로명 주소를 길게 보게 하고 버튼 여백 줄이기 cd */}
            </DivContainer>
          </ContentDiv>
        </Card>
      </Flex>
    </Container>
  );
}

export default PriceCard;
