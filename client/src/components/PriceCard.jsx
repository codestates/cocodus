import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  Card,
  ContentDiv,
  PlanTitle,
  FeatureListItem,
  Icon,
  BackgroundSqure,
  DivContainer,
  StackContainer,
  DateAndLocationContainer,
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
import { registerStore } from "../Store/Register-zustand";

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
      url: "https://server.cocodus.site/board/all",
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

    if (windowBottom >= docHeight - 5 && !isBottom) {
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
      {/*{"stack=" + "[" + `${stack}` + "]"}
   {"  총게시물=" + `${howMany[1]}`}
      {/* <button onClick={() => setHowMany(3)}>총개수 증가</button> */}
      {jsonData
        .map((x, i, a) => {
          // typeof x.jsonfile === "string" ? console.log(x.jsonfile) : null;
          return typeof x.jsonfile === "string"
            ? { ...x, jsonfile: JSON.parse(x.jsonfile) }
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
  const [like, setLike] = useState(0);
  const { jsonData, specificdata, chgSpecificData } = postData();
  const {
    chgInput,
    chgOnline,
    chgTag,
    chgMsg,
    chgYear,
    chgHour,
    chgMin,
    chgPlaceName,
  } = registerStore();
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
      if (x === "Node.js" || x === "node.js")
        return <Icon src={"Node" + ".png"} key={"Node" + ".png"} />;
      else if (x === "C++" || x === "c++")
        return <Icon src={"CPlus" + ".png"} key={"CPlus" + ".png"} />;
      else if (x === "C#" || x === "c#")
        return <Icon src={"CSharp" + ".png"} key={"CSharp" + ".png"} />;
      else if (x === "C" || x === "c")
        return <Icon src={"C" + ".png"} key={"C" + ".png"} />;
      else if (x === "Django" || x === "django")
        return <Icon src={"Django" + ".png"} key={"Django" + ".png"} />;
      else if (x === "Flutter" || x === "flutter")
        return <Icon src={"Flutter" + ".png"} key={"Flutter" + ".png"} />;
      else if (x === "Go" || x === "go")
        return <Icon src={"Go" + ".png"} key={"Go" + ".png"} />;
      else if (x === "Java" || x === "java")
        return <Icon src={"Java" + ".png"} key={"Java" + ".png"} />;
      else if (x === "Javascript" || x === "javascript")
        return <Icon src={"JavaScript" + ".png"} key={"JavaScript" + ".png"} />;
      else if (x === "Kotlin" || x === "kotlin")
        return <Icon src={"Kotlin" + ".png"} key={"Kotlin" + ".png"} />;
      else if (x === "Python" || x === "python")
        return <Icon src={"Python" + ".png"} key={"Python" + ".png"} />;
      else if (x === "React" || x === "react")
        return <Icon src={"React" + ".png"} key={"React" + ".png"} />;
      else if (x === "Ruby" || x === "ruby")
        return <Icon src={"Ruby" + ".png"} key={"Ruby" + ".png"} />;
      else if (x === "Spring" || x === "spring")
        return <Icon src={"Spring" + ".png"} key={"Spring" + ".png"} />;
      else if (x === "Swift" || x === "swift")
        return <Icon src={"Swift" + ".png"} key={"Swift" + ".png"} />;
      else if (x === "Typescript" || x === "typescript")
        return <Icon src={"TypeScript" + ".png"} key={"TypeScript" + ".png"} />;
      else if (x === "Vue" || x === "vue")
        return <Icon src={"Vue" + ".png"} key={"Vue" + ".png"} />;
      else return <Icon src={x + ".png"} key={x + ".png"} />;
    });
  };
  const findData = (id) => {
    let temp = jsonData.filter((el) => {
      return el.id === id;
    })[0];
    if (typeof temp.jsonfile === "string") {
      Object.assign(temp, { jsonfile: JSON.parse(temp.jsonfile) });
    }
    chgSpecificData([temp]);
    // console.log(specificdata);
    let date = "";
    if (specificdata) {
      chgInput("title", specificdata[0].jsonfile.title);
      chgOnline("online", specificdata[0].jsonfile.online);
      chgTag(specificdata[0].jsonfile.tag);
      chgMsg(specificdata[0].jsonfile.content);
      chgPlaceName(specificdata[0].jsonfile);
      date = specificdata[0].jsonfile.date;
    }
    // let arr = date.split(" ");
    // let year = arr.slice(0, 3);
    // year = year.join(" ");
    // chgYear(year);
    // let hour = arr.slice(3, 5);
    // if (hour[0] === "오후") {
    //   let h = hour[1].split("");
    //   h[0] = Number(h[0]) + 12;
    //   chgHour(h[0]);
    // } else {
    //   let h = hour[1].split("");
    //   h[0] = Number(h[0]);
    //   chgHour(h[0]);
    // }
    // let min = arr.slice(5);
    // if (min.length > 0) {
    //   min = min.join("");
    //   let m = min.split("");
    //   if (m.length === 3) {
    //     m = Number(`${m[0]}${m[1]}`);
    //     chgMin(m);
    //   } else {
    //     m = Number(`${m[0]}`);
    //     chgMin(m);
    //   }
    // }
    navigate("/RegisterContentViewPage");
  };

  return (
    <Container>
      <Flex>
        <Card>
          <BackgroundSqure />{" "}
          <ContentDiv>
            {" "}
            <StackContainer>
              {topThree(data.jsonfile.tag, stack)}
            </StackContainer>
            <DivContainer onClick={() => findData(data.id)}>
              <PlanTitle>{data.jsonfile.title}</PlanTitle>
              <FeatureListItem>
                <span>{data.jsonfile.content}</span>
              </FeatureListItem>
              <span style={{ paddingRight: "15px" }}>♥️{data.total_like}</span>
              <span>👀{data.veiw_count}</span>
            </DivContainer>
            <DateAndLocationContainer>
              <DivContainer>
                {data.jsonfile.date}
                <br></br>
                {data.jsonfile.roadAddress}
              </DivContainer>{" "}
            </DateAndLocationContainer>
          </ContentDiv>
        </Card>
      </Flex>
    </Container>
  );
}

export default PriceCard;
