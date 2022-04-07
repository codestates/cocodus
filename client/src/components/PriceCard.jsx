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
  const [howMany, setHowMany] = useState([0, 3]); //첫번째가 시작인덱스 2번째가 몇개 받아올지 개수
  const [km, setKm] = useState(30);
  const { jsonData, chgJsonData } = postData();
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
        howMany,
        km,
      },
    });
    if (temp.data.length) {
      chgJsonData(temp.data);
    }
  }, [isLogin, nickName, howMany, km]);

  return (
    <div>
      {"시작인덱스=" + `${howMany[0]}` + "  총게시물=" + `${howMany[1]}`}
      <button onClick={() => setHowMany([howMany[0] + 1, howMany[1]])}>
        시작인덱스 증가
      </button>
      <button onClick={() => setHowMany([howMany[0] - 1, howMany[1]])}>
        시작인덱스 감소
      </button>
      <button onClick={() => setHowMany([howMany[0], howMany[1] + 1])}>
        총개수 증가
      </button>
      <button onClick={() => setHowMany([howMany[0], howMany[1] - 1])}>
        총개수 감소
      </button>
      {km}
      <button onClick={() => setKm(km + 1)}>km증가</button>
      <button onClick={() => setKm(km - 1)}>km감소</button>

      {jsonData
        .map((x) =>
          typeof x.jsonfile === "string"
            ? { jsonfile: JSON.parse(x.jsonfile), id: x.id }
            : x
        )
        .filter((x) =>
          stack.length ? stack.indexOf(x.jsonfile.tag) > -1 : true
        )
        .map((x, i) => (
          <CardSection data={x.jsonfile} key={x.id}></CardSection>
        ))}
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
