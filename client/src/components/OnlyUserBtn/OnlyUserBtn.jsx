import React from "react";
import { UserBlock } from "./OnlyUserBtn.styled";
import { Button } from "../styles/Button.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { accessTokenStore } from "../../Store/accesstoken-zustand";
import {
  boardDeleteLoadingStore,
  myPostClosedLoadingStore,
} from "../../Store/loading-zustand";

function OnlyUserBtn(props) {
  const { chgLoading, chgError } = myPostClosedLoadingStore();
  const { chgLoading4, chgError4 } = boardDeleteLoadingStore();
  const { accessToken, cocodusId } = accessTokenStore();
  let navigate = useNavigate();

  // 마감 버튼
  const onRecruit = async () => {
    try {
      chgError(null);
      chgLoading(true);
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
          accessToken,
          user_id: cocodusId,
          // post_id: postId,
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
    } catch (e) {
      chgError(e);
    }
    chgLoading(false);
  };

  // 삭제 버튼
  const onDelete = async () => {
    try {
      chgError4(null);
      chgLoading4(true);
      const delData = {
        accessToken,
        cocodusId,
        postId,
      };
      const delPost = await axios({
        method: "DELETE",
        url: "http://localhost:8080/board/list",
        data: {
          // jsonFile: JSON.stringify(delData),
          accessToken: accessToken,
          user_id: cocodusId,
          // post_id: postId,
        },
      });
      console.log(delPost);
    } catch (e) {
      chgError4(e);
    }
    chgLoading4(false);
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
