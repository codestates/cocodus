// 리액트 에디터

import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";
import { EditorState, convertToRaw } from "draft-js";
import { registerStore } from "../Store/Register-zustand";
// import draftToHtml from "draftjs-to-html";

const MyBlock = styled.div`
  .wrapper-class {
    border: 1px solid #ced4da !important;
    margin-bottom: ${(props) => props.bottom};
  }
  .toolbar-class {
    border-bottom: 1px solid #ced4da !important;
  }
  .editor {
    height: 350px !important;
    /* border: 1px solid #ced4da !important; */
    padding: 5px !important;
    border-radius: 2px !important;
    font-size: 1.125rem;
    background: rgba(196, 196, 196, 0.26);
  }
  .DraftEditor-editorContainer {
    z-index: 0;
  }
`;

const TestEditorForm = ({ onChange }) => {
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { content } = registerStore();
  const onEditorStateChange = (editorState) => {
    // editorState에 값 설정
    setEditorState(editorState);
  };
  const onEditorChange = (val) => {
    setEditorState(val);
  };

  return (
    <>
      {/* {console.log(editorState.getCurrentContent().getPlainText())} */}
      <MyBlock bottom="2rem">
        <Editor
          editiorState={editorState}
          // 에디터와 툴바 모두에 적용되는 클래스
          wrapperClassName="wrapper-class"
          // 에디터 주변에 적용된 클래스
          editorClassName="editor"
          // 툴바 주위에 적용된 클래스
          toolbarClassName="toolbar-class"
          // 툴바 설정
          toolbar={{
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            list: { inDropdown: true },
            textAlign: { inDropdown: false },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          placeholder="프로젝트/스터디 진행 방식 및 신청 방법(오픈카톡, 댓글 등)에 대해 구체적으로 작성 해주세요!"
          // 한국어 설정
          localization={{
            locale: "ko",
          }}
          // 초기값 설정
          editorState={editorState}
          // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
          // onEditorStateChange={onEditorStateChange}
          onChange={onChange}
          onEditorStateChange={onEditorChange}
        />
        {/* <textarea
          // style={{ display: "none" }}
          // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          value={content}
          onChange={onChange}
        ></textarea> */}
      </MyBlock>
    </>
  );
};

export default TestEditorForm;
