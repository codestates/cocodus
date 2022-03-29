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

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const re = /access_token/;
    let acc_String = window.document.cookie
      .split(";")
      .filter((x) => (x.match(re) ? true : false))[0];
    if (acc_String) {
      setAccessToken(acc_String.split("=")[1]);
    }
  }, []);
  useEffect(() => {
    if (accessToken) setIsLogin(true);
    else setIsLogin(false);
  }, [accessToken]);
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
          <NavBar isLogin={isLogin} />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/registeredit" element={<RegisterEditPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
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
