// 게시판 상세글 조회 페이지

import React from "react";
import BackIcon from "../components/BackIcon/BackIcon";
import OnlyUserBtn from "../components/OnlyUserBtn/OnlyUserBtn";
import RegisterContentView from "../components/RegisterContentView/RegisterContentView";
import { accessTokenStore } from "../Store/accesstoken-zustand";
import { postData } from "../Store/postData-zustand";

function RegisterContentViewPage(props) {
  const { cocodusId } = accessTokenStore();
  const { specificdata } = postData();

  const listUp = (specificdata) => {
    if (
      specificdata &&
      specificdata[0] &&
      specificdata[0].jsonfile &&
      specificdata[0].jsonfile.cocodusId === cocodusId
    ) {
      return <OnlyUserBtn />;
    }
  };
  return (
    <>
      {/* 만약 내가 이 글이 내가 작성한 글이라면 수정과 삭제, 마감 버튼이 있어야 한다 */}

      {/* {specificdata[0].jsonfile.cocodusId === cocodusId ? (
        <OnlyUserBtn />
      ) : null} */}
      {listUp(specificdata)}
      <BackIcon />
      <RegisterContentView />
    </>
  );
}

export default RegisterContentViewPage;
