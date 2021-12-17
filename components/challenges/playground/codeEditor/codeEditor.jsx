import React, { useState, useRef } from 'react'
import Editor from '@monaco-editor/react'
import position from '../../../../styles/styles-PlayGround/playGround.module.scss'
import styles from '../../../../styles/styles-PlayGround/codeEditor.module.scss'

function CodeEditor () {
  const [ content, setContent ] = useState('// Comienza tu codigo aqui...')

  const editorRef = useRef(null)

  const handleEditor = (editor, monaco) => {
    editorRef.current = editor
  }

  return (
    <div className={position.itemCodeView}>
      <p className={styles.solutionHeader}>Solucion: </p>
        <Editor
        height='870px'
        /* width='950px' */
        defaultLanguage='javascript'
        defaultValue={content}
        theme='vs-dark'
        onChange={(value) => setContent(value)}
        onMount={handleEditor}
      />
    </div>
  )
}

export default CodeEditor
