import React from 'react';
import Image from 'next/image';
import Logop from '../../../public/icons/LogoPlataforma1.png';
import styles from '../../../styles/Header.module.scss';
import position from '../../../styles/Profile.module.scss';
import UP from '../../../pages/profile'
import { useUser } from '@auth0/nextjs-auth0'


const Header = () => {

  const {user} = useUser();

  if(user)
  {
    return(
      <div className={position.iheader}>

      <header className={styles.header}>
        <div className={styles.logo}>
        
        
          <a className="" href='$'>
            <Image
              src={Logop}
              alt='Logo de la pagina'
              />
          </a>

               
        </div>
        <nav className={styles.navBar}>
          <a href="/api/auth/logout">Logout</a>
              <UP />
        </nav>
    </header>
    </div>
      
      )
  }
  
  return (
    <div className={position.iheader}>

      <header className={styles.header}>
        <div className={styles.logo}>
        
          <a className="" href='$'>
            <Image
              src={Logop}
              alt='Logo de la pagina'
              />
          </a>

               
        </div>
        <nav className={styles.navBar}>
          <a href="/api/auth/login">Login</a>
        </nav>
    </header>
    </div>
  )
}

export default Header;
