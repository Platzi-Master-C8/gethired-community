import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyle = makeStyles({
  formulario: {
    margin: 'auto',
    width: '40%',
    maxWidth: '600px',
    background: '#FFFFFF',
    padding: '33px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '8px'
  },

  encabezadoModal: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    margin: '10px 0'
  },

  Encabezado: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '22px',
    color: '#1E1E1F'
  },
  parrafo: {
    color: 'black',
    margin: '20px 0 10px 0'
  },

  ButtonContainer: {
    marginTop: '14px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    width: '100%'
  },

  sendButtonActive: {
    padding: '5px 10px',
    marginTop: '10px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg,#ae4eff,#5f64ff)',
    color: '#FFFFFF',
    border: 'none',
    width: '93px',
    height: '43px',
    cursor: 'pointer'
  },

  sendButtonInactive: {
    padding: '5px 10px',
    marginTop: '10px',
    fontWeight: 'bold',
    width: '93px',
    height: '43px',
    cursor: 'pointer'
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: '10px'
  },

  labels: {
    position: 'relative',
    color: '#9E9E9E',
    background: '#E0E0E0',
    fontSize: '15px',
    fontWeight: 'bold',
    borderRadius: '40px',
    padding: '15px 20px',
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
    cursor: 'pointer'
  },
  radios: {
    display: 'none',
    '&:checked + label': {
      background: 'linear-gradient(90deg,#ae4eff,#5f64ff)',
      color: '#FFFFFF'
    }
  }
});

function Form({ children }) {
  const [mensaje, setMensaje] = useState('');

  const [sendInfo, setSendInfo] = useState(false);

  const onSend = () => {
    setMensaje(mensaje + 'Enviando...');
  };

  const onClicking = () => {
    setSendInfo(true);
  };

  const classes = useStyle();

  return (
    <form className={classes.formulario}>
      <div className={classes.encabezadoModal}>
        <label className={classes.Encabezado}>
          Elige un motivo para denunciar esta publicación
        </label>
        {children}
      </div>

      <hr style={{ width: '100%' }} />

      <p className={classes.parrafo}>{mensaje}</p>

      <div className={classes.ButtonContainer}>
        <div className={classes.container}>
          <input
            type="radio"
            id="radio1"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio1" className={classes.labels}>
            Es contenido no deseado
          </label>

          <input
            type="radio"
            id="radio2"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio2" className={classes.labels}>
            Es inapropiado
          </label>

          <input
            type="radio"
            id="radio3"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio3" className={classes.labels}>
            Cuenta falsa
          </label>

          <input
            type="radio"
            id="radio4"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio4" className={classes.labels}>
            Nombre falso
          </label>

          <input
            type="radio"
            id="radio5"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio5" className={classes.labels}>
            Acoso o bullying
          </label>

          <input
            type="radio"
            id="radio6"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio6" className={classes.labels}>
            Noticias o anuncios falsos
          </label>

          <input
            type="radio"
            id="radio7"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio7" className={classes.labels}>
            Publicación duplicada
          </label>

          <input
            type="radio"
            id="radio8"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio8" className={classes.labels}>
            Insultos
          </label>

          <input
            type="radio"
            id="radio9"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio9" className={classes.labels}>
            Es molesta o de mal gusto
          </label>

          <input
            type="radio"
            id="radio10"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio10" className={classes.labels}>
            Va en contra de mis ideales
          </label>

          <input
            type="radio"
            id="radio11"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio11" className={classes.labels}>
            Se hizo pasar como administrador
          </label>

          <input
            type="radio"
            id="radio12"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio12" className={classes.labels}>
            Muchos nombres de usuario
          </label>

          <input
            type="radio"
            id="radio13"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio13" className={classes.labels}>
            Incitación al odio
          </label>

          <input
            type="radio"
            id="radio14"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio14" className={classes.labels}>
            Spam
          </label>

          <input
            type="radio"
            id="radio15"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio15" className={classes.labels}>
            Se hizo pasar como otro miembro
          </label>

          <input
            type="radio"
            id="radio16"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio16" className={classes.labels}>
            Foro incorrecto
          </label>

          <input
            type="radio"
            id="radio17"
            className={classes.radios}
            name="modal"
            onClick={() => onClicking()}
          ></input>
          <label htmlFor="radio17" className={classes.labels}>
            Publicó información personal de otro miembro
          </label>
        </div>

        <hr style={{ width: '100%' }} />

        {!!sendInfo && (
          <Button
            variant="contained"
            disabled={false}
            className={classes.sendButtonActive}
            type="submit"
            onClick={() => onSend()}
          >
            Enviar
          </Button>
        )}
        {!sendInfo && (
          <Button
            variant="outlined"
            disabled
            className={classes.sendButtonInactive}
            type="submit"
            onClick={() => onSend()}
          >
            Enviar
          </Button>
        )}
      </div>
    </form>
  );
}

export { Form };
