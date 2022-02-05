import React from 'react';
import CodeEditor from '../../../components/challenges/playground/codeEditor/codeEditor';
import Header from '../../../components/security/header/Header';
import styled from '@emotion/styled';

const ContainerPG = styled.div`
  overflow-y: hidden;
  width: 100%;
  height: 100%;
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
  height: 70px;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  border-bottom: 2px solid #A779FF;
`;

const ItemParraf = styled.div`
  height: 100px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: justify;
  font-size: 15px;
  margin-bottom: 25px;
  line-height: 25px;
`;

const datos = {
  "title": "Reto # 1",
  "instructions": "El ejercicio clasico e introductorio. Tan solo un Hola, Mundo!!. Hola ,Mundo! es el tradicional primer programa para acercarse al ambiente en un lenjuague de programación.",
  "objectives": "Crea una función que retorne una cadena de texto 'Hola mundo'. Corre el codigo y asegurate de que sea exitoso. Si tu solución es correcta estaràs listo para pasar al siguiente ejercicio y adentrarte en el maravilloso mundo de JavaScript.",
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
      <ItemInfo>
        <ItemTitle >{datos.title}</ItemTitle>
        <ItemTitle2>Instrucciones</ItemTitle2>
        <ItemParraf>{datos.instructions}</ItemParraf>
        <ItemTitle2>Objetivos</ItemTitle2>
        <ItemParraf>{datos.objectives}</ItemParraf>
      </ItemInfo>
    </ContainerPG>
  );
};

export default PlayGround;
