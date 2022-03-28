import React from "react";
import { Section } from "../styles/Section.styled";
import { AiOutlineRead, AiOutlineLike } from "react-icons/ai";
import TitleContent from "../TitleContent";
import { Block, IconAndText, Icon } from "./MyPostAndLikes.styled";

function Mylikes(props) {
  return (
    <Section>
      <Block>
        <IconAndText shadow>
          <Icon>
            <AiOutlineRead size={30} />
          </Icon>
          <TitleContent text="읽은 목록" width="100%" fontSize="1.5rem" />
        </IconAndText>
        <IconAndText shadow>
          <Icon>
            <AiOutlineLike size={30} />
          </Icon>
          <TitleContent text="좋아요 목록" width="100%" fontSize="1.5rem" />
        </IconAndText>
      </Block>
    </Section>
  );
}

export default Mylikes;
