import React, { useState, useRef } from 'react';
import Coolicon from '../../../../public/icons/coolicon.svg';
import Editor from '@monaco-editor/react';
import Image from 'next/image';
import styled from '@emotion/styled';

const ItemCodeView = styled.div`
    box-shadow: 3px 3px 3px #A779FF;
    grid-area: codeView;
    & section {
      margin: 0;
    }
  `;

  const ItemButton = styled.div`
  display: flex;
  width: 100%;
  height: 8%;
  justify-content: end;
  align-items: center;
`;

const ItemButtonRun = styled.div`
  height: 35px;
  width: 131px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #A779FF;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #A779FF;
  font-size: 14px;
  font-weight: bold;
  padding-top: 3px;
  &:hover {
    color: white;
    background-color: #A779FF;
    border: 0.5px solid rgba(85, 91, 255, 0.79);
  }
`;

const ItemButtonSubmit = styled.div`
  height: 35px;
  width: 82px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: #A779FF;
  border-radius: 6px;
  border: 1px solid #A779FF;
  padding-top: 3px;
  margin: 0 30px;
  &:hover {
    color: #A779FF;
    background-color: white;
    border: 0.5px solid rgba(85, 91, 255, 0.79);
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
      <ItemButton>
            <ItemButtonRun onClick={() => alert('Running Challenge ... ')}>
              Run Tests
              <Image id='img-icon' src={Coolicon} alt='Run Challenge'/>
            </ItemButtonRun>
          <ItemButtonSubmit onClick={() => alert('Sending Challenge ...')}>Submit</ItemButtonSubmit>
        </ItemButton>
    </ItemCodeView>
  )
}

export default CodeEditor
