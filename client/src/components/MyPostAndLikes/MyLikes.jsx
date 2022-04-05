import React, { useState } from "react";
import { Section } from "../styles/Section.styled";
import { AiOutlineRead, AiOutlineLike } from "react-icons/ai";
import { Block, IconAndText, Icon, Title } from "./MyPostAndLikes.styled";
import WriteIcon from "../WriteIcon/WriteIcon";

function Mylikes(props) {
  const [visible, setVisible] = useState(false);
  const onLikesList = () => {
    setVisible(true);
  };
  const onViewList = () => {
    setVisible(false);
  };

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
