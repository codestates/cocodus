import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NavBar } from "../src/components";
import {
  RegisterEditPage,
  RegisterPage,
  RegisterContentViewPage,
  Home,
  Error,
} from "./Pages";
function App() {
  const [count, setCount] = useState(0);
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
            <Route exact path="/registeredit" element={<RegisterEditPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route
              exact
              path="/RegisterContentViewPage"
              element={<RegisterContentViewPage />}
            />
            <Route exact path="/error" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
