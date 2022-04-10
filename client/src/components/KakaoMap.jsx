import React, { useEffect, useState } from "react";
import kakaoApi from "../api/kakaoApi";
import styled from "styled-components";
import { registerUserInfoStore } from "../Store/RegisterUserInfo-zustand";
let map;
let ps;
let infowindow;

export default function KakaoMap({ store }) {
  const { place, chgPlace, chgMarker } = store();
  // const [place, setPlace] = useState("");
  // const [markerNow, setMarkerNow] = useState({});
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init("JAVASCRIPT_KEY");
    }
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    map = new kakao.maps.Map(mapContainer, mapOption);
    ps = new kakao.maps.services.Places();
    infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  }, []);

  function placeSearch(placeName) {
    if (placeName) {
      ps.keywordSearch(
        placeName,
        // kakaoApi.placeSCB(map, infowindow, setMarkerNow)
        kakaoApi.placeSCB(map, infowindow, chgMarker)
      );
    }
  }
  return (
    <Div>
      {/* {markerNow ? console.log(markerNow) : null}
      {markerNow.road_address_name} */}
      <Input
        onChange={(e) => chgPlace(e.target.value)}
        onKeyUp={(e) => {
          e.key === "Enter" ? placeSearch(place) : null;
        }}
        placeholder="미팅장소를 입력하고 엔터를 눌러 주세요"
      ></Input>

      <div
        id="map"
        style={{ width: "100%", height: "400px", border: "1px solid #ced4da" }}
      ></div>
    </Div>
  );
}

export const Input = styled.input`
  color: ${(props) => props.color};
  text-shadow: ${(props) => props.textShadow};
  background: rgba(196, 196, 196, 0.26);
  font-size: 16px;

  font-family: initial;
  width: 100%;
  padding: 10px 8px;
  overflow: hidden;
  border: 1px solid #ced4da;
  border-radius: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  /* margin-right: ${(props) => props.ri};
  ${(props) =>
    props.focus &&
    css`
      &:focus {
        outline: none;
      }
    `} */
`;

export const Div = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
