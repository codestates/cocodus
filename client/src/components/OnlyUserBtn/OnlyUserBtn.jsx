import React from "react";
import { UserBlock } from "./OnlyUserBtn.styled";
import { Button } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";

function OnlyUserBtn(props) {
  const { accessToken, cocodusId } = accessTokenStore();
  let navigate = useNavigate();
  const onRecruit = async () => {
    const data = {
      user_id: cocodusId,
      postId,
      recruiting: false,
    };
    const closedPost = await axios({
      method: "PATCH",
      url: "http://localhost:8080/board/recruiting",
      data: {
        // jsonFile: JSON.stringify(data),
        user_id: cocodusId,
        post_id: postId,
        recruiting: false,
      },
    });
    if (closedPost.status === 200) {
      navigate("/");
      console.log(closedPost);
    } else {
      alert("뭔가 잘못됬어요!!");
      console.log(userData.status);
    }
  };
  const onDelete = async () => {
    const delData = {
      accessToken,
      cocodusId,
      postId,
    };
    const delPost = await axios({
      method: "Delete",
      url: "http://localhost:8080/board/list",
      // headers: {"Authorization" : `Bearer ${accessToken}`},
      data: {
        // jsonFile: JSON.stringify(delData),
        accessToken: accessToken,
        user_id: cocodusId,
        post_id: postId,
      },
    });
    console.log(delPost);
  };
  return (
    <UserBlock>
      <Button onClick={onRecruit}>마감</Button>
      <Button onClick={() => navigate("/registeredit")}>수정</Button>
      <Button onClick={onDelete}>삭제</Button>
    </UserBlock>
  );
}

export default OnlyUserBtn;
