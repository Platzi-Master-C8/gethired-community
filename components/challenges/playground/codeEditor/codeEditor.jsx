import React, { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import styled from '@emotion/styled';

const ItemCodeView = styled.div`
    box-shadow: 3px 3px 3px #A779FF;
    grid-area: codeView;
    & section {
      margin: 0;
    }
  `;

function CodeEditor () {
  const [ content, setContent ] = useState('// Comienza tu codigo aqui...')

  const editorRef = useRef(null)

  const handleEditor = (editor, monaco) => {
    editorRef.current = editor
  }

  return (
    <ItemCodeView>
        <Editor
        height='700px'
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
