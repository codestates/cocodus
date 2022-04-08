import React, { useState } from "react";
import styled from "styled-components";

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
        <Button>
          <img
            id={"JavaScript"}
            onClick={(e) => stackHandler(e.target.id)}
            src="JavaScript.png"
          />
        </Button>

        <Button>
          <img
            id={"TypeScript"}
            onClick={(e) => stackHandler(e.target.id)}
            src="TypeScript.png"
          />
        </Button>
        <Button>
          <img
            id={"React"}
            onClick={(e) => stackHandler(e.target.id)}
            src="React.png"
          />
        </Button>
        <Button>
          <img
            id={"View"}
            onClick={(e) => stackHandler(e.target.id)}
            src="View.png"
          />
        </Button>
        <Button>
          <img
            id={"Node.js"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Node.png"
          />
        </Button>
        <Button>
          <img
            id={"Java"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Java.png"
          />
        </Button>
        <Button>
          <img
            id={"Spring"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Spring.png"
          />
        </Button>
        <Button>
          <img
            id={"Kotlin"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Kotlin.png"
          />
        </Button>
        <Button>
          <img
            id={"C"}
            onClick={(e) => stackHandler(e.target.id)}
            src="C.png"
          />
        </Button>
        <Button>
          <img
            id={"C++"}
            onClick={(e) => stackHandler(e.target.id)}
            src="CPlus.png"
          />
        </Button>
        <Button>
          <img
            id={"C#"}
            onClick={(e) => stackHandler(e.target.id)}
            src="CSharp.png"
          />
        </Button>
        <Button>
          <img
            id={"Go"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Go.png"
          />
        </Button>
        <Button>
          <img
            id={"Python"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Python.png"
          />
        </Button>
        <Button>
          <img
            id={"Django"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Django.png"
          />
        </Button>
        <Button>
          <img
            id={"Angular"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Angular.png"
          />
        </Button>
        <Button>
          <img
            id={"Ruby"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Ruby.png"
          />
        </Button>
        <Button>
          <img
            id={"Flutter"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Flutter.png"
          />
        </Button>
        <Button>
          <img
            id={"Swift"}
            onClick={(e) => stackHandler(e.target.id)}
            src="Swift.png"
          />
        </Button>
      </ContainerForIcon>
    </div>
  );
}

const ContainerForIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1400px;
  max-width: 100%;
  height: auto;
  padding: 10px 20px;
  margin: 10px 20px;
`;

const Button = styled.button`
  border: none;
  background: white;
  opacity: 0.6;
  min-width: 50px;

  &:focus {
    opacity: 1;
  }
  &:active {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.08);
  }
`;
