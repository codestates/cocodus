import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Header,
  PriceCard,
  LanguageIcon,
  GlobalStyles,
  Container,
  NavBar,
} from "../components/";

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
        <PriceCard />
      </div>
    </ThemeProvider>
  );
}

export default Home;
