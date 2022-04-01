import React from "react";
import { BsPencil } from "react-icons/bs";
import { Section } from "../styles/Section.styled";
import TitleContent from "../TitleContent";
import { Block, IconAndText, Icon, Title } from "./MyPostAndLikes.styled";

function MyPost(props) {
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
    </Section>
  );
}

export default MyPost;
