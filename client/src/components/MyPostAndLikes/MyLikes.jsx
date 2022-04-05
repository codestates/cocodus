import React, { useState, useEffect } from "react";
import { Section } from "../styles/Section.styled";
import { AiOutlineRead, AiOutlineLike } from "react-icons/ai";
import { Block, IconAndText, Icon, Title } from "./MyPostAndLikes.styled";
import WriteIcon from "../WriteIcon/WriteIcon";
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { likeGetLoadingStore } from "../../Store/loading-zustand";

function Mylikes(props) {
  const [visible, setVisible] = useState(false);
  const onLikesList = () => {
    setVisible(true);
  };
  const onViewList = () => {
    setVisible(false);
  };

  const { accessToken, cocodusId } = accessTokenStore();
  const { chgLoading, chgError } = likeGetLoadingStore();

  useEffect(() => {
    const fetchlikes = async () => {
      try {
        // 요청이 시작 할 때에는 error 초기화하고
        chgError(null);
        // loading 상태를 true 로 바꿉니다.
        chgLoading(true);
        const response = await axios({
          method: "GET",
          url: "http://localhost:8080/board/like",
          data: {
            accessToken,
            user_id: cocodusId,
          },
        });
      } catch (e) {
        chgError(e);
      }
      chgLoading(false);
    };

    fetchlikes();
  }, []);

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
    </Section>
  );
}

export default Mylikes;
