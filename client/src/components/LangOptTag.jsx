// 언어 선택 태그 기능

import React, { useMemo, useState } from "react";
import Select from "react-select";
import { registerStore } from "../Store/Register-zustand";

function LangOptTag() {
  const { tag, chgTag } = registerStore();
  const LangList = useMemo(
    () => [
      { value: "c", label: "C" },
      { value: "c++", label: "C++" },
      { value: "c#", label: "C#" },
      { value: "spring", label: "Spring" },
      { value: "javascript", label: "JavaScript" },
      { value: "typescript", label: "TypeScript" },
      { value: "react", label: "React.js" },
      { value: "vue", label: "Vue.js" },
      { value: "node.js", label: "Node.js" },
      { value: "python", label: "Python" },
      { value: "django", label: "Django" },
      { value: "go", label: "Go" },
      { value: "swift", label: "Swift" },
      { value: "kotlin", label: "Kotlin" },
      { value: "angular", label: "Angular.js" },
      { value: "ruby", label: "Ruby" },
      { value: "java", label: "Java" },
      { value: "flutter", label: "Flutter" },
    ],
    []
  );

  const customStyles = {
    control: (css) => ({
      ...css,
      maxWidth: "500px",
      minWidth: "265px",
      width: "100%",
      minHeight: "3rem",
      borderRadius: "10px",
      fontSize: "17px",
    }),
  };

  const [state, setState] = useState({
    selectedOptions: [],
  });
  const handleChange = (selectedOptions) => {
    setState({ selectedOptions });
    chgTag(
      selectedOptions.map((opt) => {
        return opt.value;
      })
    );
  };
  // 객체를 요소로 가지는 배열
  const { selectedOptions } = state;
  return (
    <>
      {/* {console.log(tag)} */}
      {/* 처음 글쓰기 할때 */}
      {tag.length === 0 ? (
        <Select
          styles={customStyles}
          options={LangList}
          isMulti
          isSearchable
          onChange={handleChange}
          placeholder="프로젝트/스터디 진행 언어 선택"
          value={selectedOptions}
        />
      ) : (
        // 등록한 글을 수정할 때
        <Select
          styles={customStyles}
          options={LangList}
          isMulti
          isSearchable
          onChange={handleChange}
          placeholder="프로젝트/스터디 진행 언어 선택"
          value={tag.map((el) => {
            return LangList.find((op) => {
              return op.value === el;
            });
          })}
        />
      )}
    </>
  );
}

export default LangOptTag;
