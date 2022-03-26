import React, { useState } from "react";
import ReactDOM from "react-dom";
import Checkbox from "./LandingPageButtons.styled";
import { Container } from "../styles/Container.styled";

function LandingPageCheckbox() {
  const [value, setCheckbox] = useState(true);

  return (
    <div>
      <Container style={{ height: " 70px" }}>
        <Checkbox
          style={{ float: "right" }}
          label="현재 모집 중인 모임"
          value={value}
          checked={value}
          onChange={({ target }) => setCheckbox(!value)}
        />
      </Container>
    </div>
  );
}
export default LandingPageCheckbox;
