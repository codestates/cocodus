// 언어 선택 태그 기능

import React, { useMemo } from "react";
import Select from "react-select";

function LangOptTag({ onChange }) {
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

  return (
    <Select
      styles={customStyles}
      options={LangList}
      isMulti
      isSearchable
      onChange={onChange}
      placeholder="프로젝트/스터디 진행 언어 선택"
    />
  );
}

export default LangOptTag;
