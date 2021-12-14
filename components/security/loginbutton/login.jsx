import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    // return(
        
    //     loginWithRedirect()
  
    // )

    return(
        <button className = "App-loginButton" onClick = {() => {

            loginWithRedirect()
        }}> 
        
        Login 
        
        </button>          
        
    )    
}

export { LoginButton };