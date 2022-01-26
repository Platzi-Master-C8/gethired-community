import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import styled from '@emotion/styled';

function CodeEditor () {
  const [ content, setContent ] = useState('// Comienza tu código aqui...')

  const editorRef = useRef(null)

  const handleEditor = (editor, monaco) => {
    editorRef.current = editor
  }

  const ItemCodeView = styled.div`
    grid-area: codeView;
    & section {
      width: 100%;
      margin: 0;
    }
  `;

  const SolutionHeader = styled.div`
    background-color: #474b4e;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 17px;
    margin: 0;
    padding: 10px 0 30px 10px;
    height:30px;
  `;

  return (
    <ItemCodeView>
      <SolutionHeader>Solución:</SolutionHeader>
        <Editor
        height='870px'
        defaultLanguage='javascript'
        defaultValue={content}
        theme='vs-dark'
        onChange={(value) => setContent(value)}
        onMount={handleEditor}
      />
    </ItemCodeView>
  )
}

export default CodeEditor
