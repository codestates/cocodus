import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header, PriceCard, LanguageIcon, GlobalStyles } from "../components/";
import useScrollToggle from "../components/useScrollToggle";
import { TopBtn } from "../components/styles/top_icon.styled";

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
  const scrollFlag = useScrollToggle();
  const moveTop = () => (document.documentElement.scrollTop = 0);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
        <LanguageIcon stackHandler={stackHandler} stack={stack} />
        <PriceCard stack={stack} />
        {scrollFlag && <TopBtn onClick={moveTop}>TOP</TopBtn>}
      </div>
    </ThemeProvider>
  );
}

export default Home;
