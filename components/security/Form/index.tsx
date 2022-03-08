import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyle = makeStyles({
    
    formulario:{
        margin: 'auto',
        width: '40%',
        maxWidth: '600px',
        background: '#FFFFFF',
        padding: '33px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '8px',
    },
    
    encabezadoModal:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        margin: '10px 0',
    },
    
    Encabezado:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '22px',
        color: '#1E1E1F',
    },
    parrafo:{
        color: 'black',
        margin: '20px 0 10px 0',
    },
    
    ButtonContainer:{
        marginTop: '14px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        width: '100%',
    },
    
    sendButtonActive:{
        padding: '5px 10px',
        marginTop: '10px',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg,#ae4eff,#5f64ff)',
        color: '#FFFFFF',
        border: 'none',
        width: '93px',
        height: '43px',
        cursor: 'pointer',
    },
    
    sendButtonInactive:{
        padding: '5px 10px',
        marginTop: '10px',
        fontWeight: 'bold',
        width: '93px',
        height: '43px',
        cursor: 'pointer',
    },
    
    container:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginBottom: '10px',
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
        cursor: 'pointer',
    },
    radios:{
        display: 'none',
        '&:checked + label':{
    
            background: 'linear-gradient(90deg,#ae4eff,#5f64ff)',
            color: '#FFFFFF',
        }
    },
})


function Form({children}){
    
    const [mensaje, setMensaje] = useState('');

    const [sendInfo, setSendInfo] = useState(false);

    const onSend = () =>{
        setMensaje(mensaje + 'Sending...');    
    }

    const onClicking = () => {

        setSendInfo(true)
    }

    const classes = useStyle();


    return(
  
        <form className={classes.formulario}>
            <div className={classes.encabezadoModal}>
                <label className={classes.Encabezado}>Let Us Know What's Going On</label>
                {children}
            </div>

            <hr style={{width: '100%'}}/>

            <p className={classes.parrafo}>{mensaje}</p>

            <div className={classes.ButtonContainer}>
                
                <div className={classes.container}>
                    <input type='radio' id='radio1' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio1' className={classes.labels}>Unwanted content</label>

                    <input type='radio' id='radio2' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio2' className={classes.labels}>Posting inappropriate things</label>

                    <input type='radio' id='radio3' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio3' className={classes.labels}>Fake account</label>

                    <input type='radio' id='radio4' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio4' className={classes.labels}>Fake name</label>

                    <input type='radio' id='radio5' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio5' className={classes.labels}>Harassment or bullying</label>

                    <input type='radio' id='radio6' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio6' className={classes.labels}>Fake news or scams</label>

                    <input type='radio' id='radio7' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio7' className={classes.labels}>Duplicate</label>

                    <input type='radio' id='radio8' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio8' className={classes.labels}>Attaks individual or group</label>

                    <input type='radio' id='radio9' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio9' className={classes.labels}>Annoying or distasteful</label>

                    <input type='radio' id='radio10' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio10' className={classes.labels}>It goes against my ideals</label>

                    <input type='radio' id='radio11' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio11' className={classes.labels}>Pretending to be an administrator</label>

                    <input type='radio' id='radio12' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio12' className={classes.labels}>Many usernames</label>

                    <input type='radio' id='radio13' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio13' className={classes.labels}>Hate speech</label>

                    <input type='radio' id='radio14' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio14' className={classes.labels}>Spam</label>

                    <input type='radio' id='radio15' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio15' className={classes.labels}>Pretending to be someone</label>

                    <input type='radio' id='radio16' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio16' className={classes.labels}>Wrong forum</label>

                    <input type='radio' id='radio17' className={classes.radios} name='modal' onClick={() => onClicking()}></input>
                    <label htmlFor='radio17' className={classes.labels}>Posting another member private information</label>     
                </div>

                <hr style={{width: '100%'}}/>

                {!!sendInfo && (
                    
                    <Button variant="contained" disabled={false} className={classes.sendButtonActive} type='submit' onClick={() => onSend()}>
                        Send
                    </Button>

                )}
                {!sendInfo && (

                    <Button variant="outlined"  disabled className={classes.sendButtonInactive} type='submit' onClick={() => onSend()}>
                        Send
                    </Button>

                )}

                
                    

            </div>
        </form>
    
    )
}

export { Form };