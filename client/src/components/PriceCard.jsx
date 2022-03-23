import React, { useState } from "react";
import {
  Card,
  ContentDiv,
  PlanTitle,
  FeatureListItem,
  Icon,
  BackgroundSqure,
  DivContainer,
  Align,
} from "./styles/PriceCard.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import Data from "../api/DummyData";
import styled from "styled-components";

function PriceCard() {
  const [data, data변경] = useState(Data);
  return (
    <div>
      {data.map((a, i) => {
        return <CardSection data={data[i]} key={"CardSection" + i} />;
      })}
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
              <PlanTitle></PlanTitle>
              일자: {props.data.date}
              <br></br>
              위치: {props.data.meetingpoint}
              <Button>지도 크게 보기</Button>
            </DivContainer>
          </ContentDiv>
        </Card>
      </Flex>
    </Container>
  );
}

export default PriceCard;
