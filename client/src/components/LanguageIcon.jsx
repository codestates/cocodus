import React from "react";
import styled from "styled-components";

export default function LanguageIcon({ stackHandler, stack }) {
  let stackName = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Node.js",
    "Java",
    "Spring",
    "Kotlin",
    "C",
    "C++",
    "C#",
    "Go",
    "Python",
    "Django",
    "Angular",
    "Ruby",
    "Flutter",
    "Swift",
  ];
  let pngName = [
    "JavaScript.png",
    "TypeScript.png",
    "React.png",
    "Vue.png",
    "Node.png",
    "Java.png",
    "Spring.png",
    "Kotlin.png",
    "C.png",
    "CPlus.png",
    "CSharp.png",
    "Go.png",
    "Python.png",
    "Django.png",
    "Angular.png",
    "Ruby.png",
    "Flutter.png",
    "Swift.png",
  ];
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
        {stackName.map((x, i) => (
          <Button key={x} itsMe={stack.indexOf(x) > -1}>
            <img
              id={x}
              onClick={(e) => stackHandler(e.target.id)}
              src={pngName[i]}
            />
          </Button>
        ))}
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
  opacity: ${(x) => (x.itsMe ? "1" : "0.6")};
  min-width: 50px;

  &:hover {
    transform: scale(1.08);
  }
`;
