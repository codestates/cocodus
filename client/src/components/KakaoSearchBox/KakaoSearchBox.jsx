import React from "react";
import { PlaceBox, PlaceInputBox, Div } from "./KakaoSearchBox.styled";

function KakaoSearchBox({ store }) {
  const { placeName, roadAddress, chgPlace, chgMarker } = store();
  return (
    <PlaceBox>
      <Div bottom="1rem">위치</Div>
      <Div>
        <div>
          <PlaceInputBox
            type="text"
            value={placeName}
            onChange={chgPlace}
            placeholder="상호명이 표시됩니다"
            readOnly
          />
        </div>
        <div>
          <PlaceInputBox
            type="text"
            value={roadAddress}
            onChange={chgMarker}
            placeholder="도로명 주소가 표시됩니다"
            readOnly
          />
        </div>
      </Div>
    </PlaceBox>
  );
}
export default KakaoSearchBox;
