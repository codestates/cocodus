import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";
import PriceCard from "../components/PriceCard";
import LanguageIcon from "../components/LanguageIcon";
import NavBar from "../components/NavBar/NavBar";
import LandingPageCheckbox from "../components/LandingPageButtons/LandingPageButtons";
function Home() {
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
        <LandingPageCheckbox />

        <PriceCard />
      </div>
    </ThemeProvider>
  );
}

export default Home;
