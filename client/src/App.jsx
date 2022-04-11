import React, { useEffect } from "react";
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
import { accessTokenStore } from "./Store/accesstoken-zustand";
import {
  boardPostLoadingStore,
  userinfoPostLoadingStore,
  boardPatchLoadingStore,
  boardDeleteLoadingStore,
  likeGetLoadingStore,
  myPostGetLoadingStore,
  boardGetLoadingStore,
  myPostClosedLoadingStore,
} from "./Store/loading-zustand";
import LoadingPage from "./Pages/LoadingPage";
import ErrorPage from "./Pages/ErrorPage";
import { registerUserInfoStore } from "./Store/RegisterUserInfo-zustand";
import axios from "axios";
function App() {
  const { nickName, chgInput } = registerUserInfoStore();
  const {
    isLogin,
    accessToken,
    cocodusId,
    chgIsLogin,
    chgAccToken,
    chgCocoId,
  } = accessTokenStore();
  useEffect(() => {
    const re = [/accessToken/, /cocodusId/];
    let acc_String = window.document.cookie
      .split(";")
      .filter((x) => (x.match(re[0]) ? true : false))[0];
    let id_String = window.document.cookie
      .split(";")
      .filter((x) => (x.match(re[1]) ? true : false))[0];
    if (id_String && acc_String) {
      chgAccToken(acc_String.split("=")[1]);
      chgCocoId(decodeURIComponent(id_String.split("=")[1]));
    }
    // if (accessToken && cocodusId && nickName) chgIsLogin(true);
  }, []);
  useEffect(async () => {
    if (accessToken && cocodusId) {
      let temp = await axios({
        url: "https://server.cocodus.site/user/info",
        method: "GET",
        params: {
          accessToken,
          cocodusId,
        },
      });
      // .then((x) =>
      //   x.status === 200 ? [chgInput(x.data), chgIsLogin(true)] : null
      // );
      if (temp.status === 200) {
        chgInput(temp.data);
        chgIsLogin(true);
      }
    } else {
      chgInput("");
      chgIsLogin(false);
    }
  }, [accessToken, cocodusId]);
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
          <NavBar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/register"
              element={isLogin ? <RegisterPage /> : <Home />}
            />
            <Route
              exact
              path="/registeredit"
              element={isLogin ? <RegisterEditPage /> : <Home />}
            />
            <Route
              exact
              path="/RegisterContentViewPage"
              element={<RegisterContentViewPage />}
            />
            <Route
              exact
              path="/mylikes"
              element={isLogin ? <MyLikesPage /> : <Home />}
            />
            <Route
              exact
              path="/mypost"
              element={isLogin ? <MyPostPage /> : <Home />}
            />
            <Route
              exact
              path="/userinfoedit"
              element={isLogin ? <UserInfoEditPage /> : <Home />}
            />
            <Route
              exact
              path="/userinforegister"
              element={isLogin ? <UserInfoRegisterPage /> : <Home />}
            />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
