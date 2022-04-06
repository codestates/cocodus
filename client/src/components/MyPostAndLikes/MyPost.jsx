import axios from "axios";
import React, { useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import { myPostGetLoadingStore } from "../../Store/loading-zustand";
import { Section } from "../styles/Section.styled";
import WriteIcon from "../WriteIcon/WriteIcon";
import { Block, IconAndText, Icon, Title } from "./MyPostAndLikes.styled";

function MyPost(props) {
  const { chgLoading, chgError } = myPostGetLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 요청이 시작 할 때에는 error 초기화하고
        chgError(null);
        // loading 상태를 true 로 바꿉니다.
        chgLoading(true);
        const response = await axios({
          method: "GET",
          url: "http://localhost:8080/board/mypost",
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

    fetchPosts();
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
    </Section>
  );
}

export default MyPost;
