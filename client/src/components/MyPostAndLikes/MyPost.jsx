import axios from "axios";
import React, { useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { Section } from "../styles/Section.styled";
import WriteIcon from "../WriteIcon/WriteIcon";
import { Block, IconAndText, Icon, Title } from "./MyPostAndLikes.styled";

function MyPost(props) {
  const { accessToken, cocodusId } = accessTokenStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
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

    fetchPosts();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
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
    </Section>
  );
}

export default MyPost;
