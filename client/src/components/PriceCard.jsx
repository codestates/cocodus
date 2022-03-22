import React, { useState } from "react";
import {
  Card,
  Content,
  PlanTitle,
  FeatureListItem,
  Icon,
  BackgroundSqure,
} from "./styles/PriceCard.styled";
import { Button } from "./styles/Button.styled";
import { Container } from "./styles/Container.styled";

function PriceCard() {
  const [features] = useState(["조원 구해요", "어떤걸 만들어볼까요"]);
  return (
    <Container>
      <Card>
        <BackgroundSqure />
        <Content>
          <PlanTitle>리액트 조원 구함니다</PlanTitle>
          <Icon src="React-icon.svg.png" />

          {features.map((item) => {
            <FeatureListItem>
              <span>{item}</span>
            </FeatureListItem>;
          })}
          <Button>들어가기</Button>
        </Content>
      </Card>
    </Container>
  );
}

export default PriceCard;
