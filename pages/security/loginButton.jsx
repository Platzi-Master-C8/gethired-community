import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from '@auth0/nextjs-auth0'
import styles from '../../styles/Userdata.module.scss';

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    // return(
        
    //     loginWithRedirect()
  
    // )

    return(
        <button className = {styles.App_loginButton} onClick = {() => {

            loginWithRedirect()
        }}> 
        
        Login 
        
        </button>          
        
    )    
}

export { LoginButton };