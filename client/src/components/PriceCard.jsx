import React, { useEffect, useState, useCallback, useRef } from "react";
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
import { useNavigate } from "react-router-dom";
import { appScrollStore } from "../Store/appScroll-zustand";

function PriceCard({ stack = [] }) {
  const { howMany, setHowMany } = appScrollStore(); //첫번째가 시작인덱스 2번째가 몇개 받아올지 개수
  const { jsonData, chgJsonData } = postData();
  const { isLogin, accessToken, cocodusId } = accessTokenStore();
  const { nickName, chgInput } = registerUserInfoStore();
  const [isBottom, setIsBottom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(async () => {
    setIsLoading(true);
    let temp = await axios({
      url: "http://localhost:8080/board/all",
      params: {
        isLogin: isLogin,
        accessToken,
        cocodusId,
        nickName,
        howMany,
        km: 30,
      },
    });
    if (temp.data.length) {
      chgJsonData(temp.data);
    }
    setIsLoading(false);
  }, [isLogin, nickName, howMany]);
  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !isBottom) {
      setIsBottom(true);
      setHowMany(3);
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {"stack=" + "[" + `${stack}` + "]"}
      {"  총게시물=" + `${howMany[1]}`}
      {/* <button onClick={() => setHowMany(3)}>총개수 증가</button> */}

      {jsonData
        .map((x) => {
          // console.log(typeof x.jsonfile);
          return typeof x.jsonfile === "string"
            ? { jsonfile: JSON.parse(x.jsonfile), id: x.id }
            : x;
        })
        .filter((x) =>
          stack.length
            ? stack.filter((y) => x.jsonfile.tag.indexOf(y) > -1).length
            : true
        )
        .map((x, i) => {
          return <CardSection data={x} key={x.id} stack={stack}></CardSection>;
        })}

      {isLoading ? (
        <div>
          여기에 로딩창만들어야함
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      ) : null}
    </div>
  );
}

function CardSection({ data, stack }) {
  const { jsonData, chgSpecificData } = postData();
  let navigate = useNavigate();
  const topThree = (tag, stack) => {
    let temp = tag
      .filter((x, i) => (stack.indexOf(x) > -1 ? true : false))
      .slice(0, 3);
    if (temp.length < 3) {
      temp.push(
        ...tag
          .filter((x) => stack.indexOf(x) === -1 && temp.indexOf(x) === -1)
          .slice(0, 3 - temp.length)
      );
    }
    return temp.map((x) => {
      if (x === "Node.js")
        return <Icon src={"Node" + ".png"} key={"Node" + ".png"} />;
      else if (x === "C++")
        return <Icon src={"CPlus" + ".png"} key={"CPlus" + ".png"} />;
      else if (x === "C#")
        return <Icon src={"CSharp" + ".png"} key={"CSharp" + ".png"} />;
      else return <Icon src={x + ".png"} key={x + ".png"} />;
    });
  };
  const findData = (id) => {
    chgSpecificData(
      jsonData.filter((el) => {
        return el.id === id;
      })
    );
    navigate("/RegisterContentViewPage");
  };
  return (
    <Container>
      <Flex>
        <Card>
          <BackgroundSqure />
          <ContentDiv>
            <DivContainer>{topThree(data.jsonfile.tag, stack)}</DivContainer>
            <DivContainer onClick={() => findData(data.id)}>
              <PlanTitle>{data.jsonfile.title}</PlanTitle>
              <FeatureListItem>
                <span>{data.jsonfile.content}</span>
              </FeatureListItem>
              <span>♥️{data.total_like}</span>
              <span>👀{data.veiw_count}</span>
            </DivContainer>
            <DivContainer>
              {data.jsonfile.date}
              <br></br>
              {data.jsonfile.roadAddress}
              {/*//도로명으로 바꾸고, 도로명 주소를 길게 보게 하고 버튼 여백 줄이기 cd */}
            </DivContainer>
          </ContentDiv>
        </Card>
      </Flex>
    </Container>
  );
}

export default PriceCard;
