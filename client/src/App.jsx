import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import PriceCard from "./components/PriceCard";
import LanguageIcon from "./components/LanguageIcon";

import RegisterPage from "./Pages/RegisterPage";


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
        <GlobalStyles />
        <Header />
        <LanguageIcon />
        <PriceCard />

        <Router>
          <Routes>
            <Route exact path="/" />
            <Route path="/register" element={<RegisterEditPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
