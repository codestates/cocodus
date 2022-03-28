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
  const [stack, setStack] = useState([]);
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#00333",
    },
  };
  const stackHandler = (e) => {
    if (stack.indexOf(e) === -1) {
      setStack([...stack, e]);
    } else {
      setStack([...stack.filter((x) => x !== e)]);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
        <LanguageIcon stackHandler={stackHandler} />
        <PriceCard stack={stack} />
      </div>
    </ThemeProvider>
  );
}

export default Home;
