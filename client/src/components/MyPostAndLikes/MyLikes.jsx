import React, { useState, useEffect } from "react";
import { Section } from "../styles/Section.styled";
import { AiOutlineRead, AiOutlineLike } from "react-icons/ai";
import { Block, IconAndText, Icon, Title } from "./MyPostAndLikes.styled";
import WriteIcon from "../WriteIcon/WriteIcon";
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";

function Mylikes(props) {
  const [visible, setVisible] = useState(false);
  const onLikesList = () => {
    setVisible(true);
  };
  const onViewList = () => {
    setVisible(false);
  };

  const { accessToken, cocodusId } = accessTokenStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchlikes = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios({
          method: "GET",
          // url: "http://localhost:8080/",
          data: {
            accessToken,
            user_id: cocodusId,
          },
        });
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchlikes();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
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
