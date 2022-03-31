import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NavBar } from "../src/components";
import {
  RegisterEditPage,
  RegisterPage,
  RegisterContentViewPage,
  Home,
  Error,
  MyLikesPage,
  MyPostPage,
  UserInfoEditPage,
  UserInfoRegisterPage,
} from "./Pages";
// {markerNow ? console.log(markerNow) : null}
// {markerNow.road_address_name}
// <KakaoMap setMarkerNow={setMarkerNow}></KakaoMap>
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [cocodusId, setCocodusId] = useState("");
  useEffect(() => {
    const re = [/access_token/, /cocodusId/];
    let acc_String = window.document.cookie
      .split(";")
      .filter((x) => (x.match(re[0]) ? true : false))[0];
    let id_String = window.document.cookie
      .split(";")
      .filter((x) => (x.match(re[1]) ? true : false))[0];
    if (id_String && acc_String) {
      setAccessToken(acc_String.split("=")[1]);
      setCocodusId(id_String.split("=")[1]);
    }
  }, []);
  useEffect(() => {
    if (accessToken && cocodusId) setIsLogin(true);
    else setIsLogin(false);
  }, [accessToken, isLogin]);
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#00333",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <NavBar
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setAccessToken={setAccessToken}
          />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/registeredit" element={<RegisterEditPage />} />
            <Route
              exact
              path="/RegisterContentViewPage"
              element={<RegisterContentViewPage />}
            />
            <Route exact path="/mylikes" element={<MyLikesPage />} />
            <Route exact path="/mypost" element={<MyPostPage />} />
            <Route exact path="/userinfoedit" element={<UserInfoEditPage />} />
            <Route
              exact
              path="/userinforegister"
              element={<UserInfoRegisterPage />}
            />
            <Route exact path="/error" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
