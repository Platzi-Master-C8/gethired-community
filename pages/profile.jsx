import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import styles from '../styles/Userdata.module.scss';


export default function Profile() {
  const { user, error, isLoading } = useUser();
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  
  return (
    user && (
      <div className = {styles.profile}>
        <img className = {styles.img_profile} src = { user.picture } alt = { user.name } />
        <div className = {styles.profile_data}>
            <h2 className = {styles.h2_profile__nombre}> { user.name } </h2>
            <p className = {styles.p_profile__email}> Email: { user.email } </p>
        </div>
      </div>     
    )
  );
}

