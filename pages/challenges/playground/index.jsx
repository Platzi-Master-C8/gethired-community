import React from 'react';
import CodeEditor from '../../../components/challenges/playground/codeEditor/codeEditor';
import Coolicon from '../../../public/icons/coolicon.svg';
import Header from '../../../components/security/header/Header';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/styles-PlayGround/playGround.module.scss';
import styled from '@emotion/styled';

const ContainerPG = styled.div`
  overflow-y: hidden;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 33% 33% 34%;
  grid-template-rows: 60px 909px;
  grid-template-areas:
  " header header header "
  " codeView codeView info"
`;

const ItemInfo = styled.div`
  grid-area: info;
`;

const ItemTitle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%);
  font-size: 34px;
  color: white;
`;

const ItemTitle2 = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  border-bottom: 2px solid #A779FF;
`;

const ItemParraf = styled.div`
  height: 100px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: justify;
  font-size: 18px;
  margin-bottom: 25px;
  line-height: 40px;
`;

const ItemButton = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-around;
  align-items: center;
`;

const ItemButtonRun = styled.div`
  height: 35px;
  width: 145px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #A779FF;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #A779FF;
  padding-top: 3px;
  &:hover {
    color: white;
    background-color: #A779FF;
    border: 0.5px solid rgba(85, 91, 255, 0.79);
    box-shadow: 0px 2px 2px 0px black;
  }
`;

const ItemButtonSubmit = styled.div`
  height: 35px;
  width: 145px;
  color: white;
  background: linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%);
  border-radius: 20px;
  border: 1px solid #A779FF;
  &:hover {
    color: $#A779FF;
    background: white;
    border: 0.5px solid rgba(85, 91, 255, 0.79);
    box-shadow: 0px 2px 2px 0px black;
  }
`;

const datos = {
  "title": "Reto # 1",
  "instructions": "El ejercicio clasico e introductorio. Tan solo un Hola, Mundo!!. Hola ,Mundo! es el tradicional primer programa para acercarse al ambeinte en un lenjuague de programación.",
  "objectives": "Crea un afunción que retorne una cadena de texto 'Hola mundo'. Corre el codigo y asegurate de que sea exitoso. Si tu solucion es correcta estaras listo para pasar al siguiente ejercicio y adentrarse en el maravilloso mundo de JavaScript.",
  "debug": "When a test fails, a message is displayed describing what went wrong and for which input. You can also use the fact that any console output will be shown too. You can write to the console using:  'Console.log('Debug Message')'",
  "solved": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .",
  "error": {
    "errorMsj": "Test Suite Failed to Run",
    "errorCode": "Syntax Error"
  }
}

const PlayGround = () => {

  return (
    <ContainerPG>
      <Header />
      <CodeEditor/>
      {/* <Info /> */}
      <ItemInfo>
        <ItemTitle >{datos.title}</ItemTitle>
        <ItemTitle2>Instrucciones</ItemTitle2>
        <ItemParraf>{datos.instructions}</ItemParraf>
        <ItemTitle2>Objetivos</ItemTitle2>
        <ItemParraf>{datos.objectives}</ItemParraf>
        <ItemButton>
          <Link href='/challenges/categories' passHref>
            <ItemButtonSubmit>Regresar</ItemButtonSubmit>
          </Link>
            <ItemButtonRun>
              Correr el codigo
              <Image className={styles.runChallengeIcon} id='img-icon' src={Coolicon} alt='Run Challenge'/>
            </ItemButtonRun>
          <ItemButtonSubmit>Guardar</ItemButtonSubmit>
        </ItemButton>
      </ItemInfo>
    </ContainerPG>
  );
};

export default PlayGround;
