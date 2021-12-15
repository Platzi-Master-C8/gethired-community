import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "../../../styles/Login.module.scss";

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    // return(
        
    //     loginWithRedirect()
  
    // )

    return(
        <button className={styles.loginButton} onClick = {() => {

            loginWithRedirect()
        }}> 
        
        Login 
        
        </button>          
        
    )    
}

export { LoginButton };