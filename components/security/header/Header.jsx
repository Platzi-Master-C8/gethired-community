import React from 'react';
import Image from 'next/image';
import Logop from '../../../public/icons/LogoPlataforma1.png';
import styles from '../../../styles/Header.module.scss';
import position from '../../../styles/Profile.module.scss';
import { useUser } from '@auth0/nextjs-auth0'
import styles2 from '../../../styles/Userdata.module.scss';
import { LoginButton } from '../../../pages/security/loginButton';


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
          <a className= {styles2.logout_button} href="/api/auth/logout">Logout</a>
          <img className = {styles2.img_profile} src = { user.picture } alt = { user.name } />
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
          <a className= {styles2.login_button} href="/api/auth/login">Login</a>
       {/* <LoginButton /> */}
        </nav>
    </header>
    </div>
  )
}

export default Header;
