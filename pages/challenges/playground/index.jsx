import React from 'react';
import Header from '../../../components/security/header/Header';
import CodeEditor from '../../../components/challenges/playground/codeEditor/codeEditor';
import Info from '../../../components/challenges/playground/InfoPlayGround/infoPlayGround';
import styles from '../../../styles/styles-PlayGround/playGround.module.scss'

const PlayGround = () => {

  return (
    <div className={styles.containerPG}>
      <Header />
      <CodeEditor/>
      <Info />
    </div>
  );
};

export default PlayGround;