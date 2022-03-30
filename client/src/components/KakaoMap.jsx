import React, { useEffect, useState } from "react";
import kakaoApi from "../api/kakaoApi";
let map;
let ps;
let infowindow;
export default function KakaoMap({ setMarkerNow, place, setPlace }) {
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
        kakaoApi.placeSCB(map, infowindow, setMarkerNow)
      );
    } else alert("야 빈칸넣지마라 오류난다");
  }
  return (
    <div>
      {/* {markerNow ? console.log(markerNow) : null}
      {markerNow.road_address_name} */}
      <input
        onChange={(e) => setPlace(e.target.value)}
        onKeyUp={(e) => {
          e.key === "Enter" ? placeSearch(place) : null;
        }}
      ></input>

      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
