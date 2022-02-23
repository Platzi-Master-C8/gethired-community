import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import styled from '@emotion/styled';

function CodeEditor() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function showValue() {
    alert(editorRef.current.getValue());
  }
  const ItemButtonRun = styled.div`
    z-index: 1;
    height: 35px;
    width: 131px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #a779ff;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #a779ff;
    font-size: 14px;
    font-weight: bold;
    padding-top: 3px;
    &:hover {
      color: white;
      background-color: #a779ff;
      border: 0.5px solid rgba(85, 91, 255, 0.79);
    }
  `;

  return (
    <React.Fragment>
      <Editor
        height="90vh"
        width="100%"
        defaultLanguage="javascript"
        defaultValue={''}
        theme="vs-dark"
      />
      <ItemButtonRun>RUN</ItemButtonRun>
    </React.Fragment>
  );
}

export default CodeEditor;
