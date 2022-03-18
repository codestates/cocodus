import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import PriceCard from "./components/PriceCard";

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

        <PriceCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
