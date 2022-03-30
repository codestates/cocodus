import React, { useState } from "react";
import { PlaceBox, PlaceInputBox, Div } from "./KakaoSearchBox.styled";
import { registerStore } from "../../Store/Register-zustand";
function KakaoSearchBox() {
  // const [markerNow, setMarkerNow] = useState({});
  // const [place, setPlace] = useState("");
  const {
    markerNow,
    placeName,
    roadAddress,

    chgPlace,
    chgMarker,
  } = registerStore();
  return (
    <PlaceBox>
      <Div>위치</Div>
      {console.log(markerNow)}
      <Div>
        <div>
          <PlaceInputBox
            type="text"
            value={placeName}
            onChange={chgPlace}
            placeholder="상호명이 표시됩니다"
          />
        </div>
        <div>
          <PlaceInputBox
            type="text"
            value={roadAddress}
            onChange={chgMarker}
            placeholder="도로명 주소가 표시됩니다"
          />
        </div>
      </Div>
    </PlaceBox>
  );
}
export default KakaoSearchBox;
