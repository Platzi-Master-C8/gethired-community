import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({

    closeButton: {

        borderRadius: '50%',
        border: 'none',
        fontSize: '20px',
        color: 'white',
        background: 'linear-gradient(90deg,#ae4eff,#5f64ff)',
        fontWeight: 'bold',
        cursor: 'pointer',
        padding: 'revert',
    }
})


function CloseModalButton(props){

    const onClose = () => {
        props.cerrarModal(false);
    }

    const classes = useStyle(); 

    return(
        
        <input className={classes.closeButton} type="button" value="X" onClick={() => onClose()}/>
    )
}

export { CloseModalButton };