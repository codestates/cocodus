import React from "react";
import { ContainerForIcon } from "./styles/ContainerForIcon.styled";
export default function LanguageIcon({ stackHandler }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ContainerForIcon>
        <img
          id={"JS"}
          onClick={(e) => stackHandler(e.target.id)}
          style={{ padding: "10px 10px" }}
          src="JS.png"
        />
        <img
          id={"TS"}
          onClick={(e) => stackHandler(e.target.id)}
          style={{ padding: "10px 10px" }}
          src="TS.png"
        />
        <img style={{ padding: "10px 10px" }} src="React.png" />
        <img style={{ padding: "10px 10px" }} src="view.png" />
        <img style={{ padding: "10px 10px" }} src="node.png" />
        <img style={{ padding: "10px 10px" }} src="Java.png" />
        <img style={{ padding: "10px 10px" }} src="Spring.png" />
        <img style={{ padding: "10px 10px" }} src="Kotlin.png" />
        <img style={{ padding: "10px 10px" }} src="C.png" />
        <img style={{ padding: "10px 10px" }} src="go.png" />
        <img style={{ padding: "10px 10px" }} src="Python.png" />
        <img style={{ padding: "10px 10px" }} src="Django.png" />
        <img style={{ padding: "10px 10px" }} src="Flutter.png" />
        <img style={{ padding: "10px 10px" }} src="swift.png" />
      </ContainerForIcon>
    </div>
  );
}
