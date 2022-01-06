import React from "react";
import Image from 'next/image';
import Coolicon from '../../../../public/icons/coolicon.svg'

import position from '../../../../styles/styles-PlayGround/playGround.module.scss'
import styles from '../../../../styles/styles-PlayGround/infoPlayground.module.scss'

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

const Info = () => {
  return (
    <div className={position.itemInfo}>
      <h1 className ={styles.itemTitle} >{datos.title}</h1>
        <h2 className ={styles.itemTitle2 }>Instrucciones</h2>
        <p className={styles.itemParraf} >{datos.instructions}</p>
        <h2 className ={styles.itemTitle2}>Objetivos</h2>
        <p className={styles.itemParraf} >{datos.objectives}</p>
      <div className={styles.itemButton}>
        <button className={styles.itemButtonRun} onClick={() => alert('Corriendo el Desafio ... ')} >
          Correr el codigo
          <Image className={styles.runChallengeIcon} id='img-icon' src={Coolicon} alt='Run Challenge'/>
        </button>
        <button className={styles.itemButtonSubmit} onClick={() => alert('Guardando el Desafio ...')}>Guardar</button>
      </div>
    </div>
  )
};

export default Info;