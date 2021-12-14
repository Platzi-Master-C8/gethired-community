import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading === true){

        return(
            <div>Loading...</div>
        )

    }
    else{

        return(
            isAuthenticated && (
                <div className = "profile">
                    <img className = "img-profile" src = { user.picture } alt = { user.name } />
                    <div className = "profile-data">
                        <h2 className = "h2-profile__nombre"> { user.name } </h2>
                        <p className = "p-profile__email">Email: { user.email } </p>
                    </div>
                </div>
            )
        )
    }

}

export { Profile };