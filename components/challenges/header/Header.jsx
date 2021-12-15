import React from 'react';
import Image from 'next/image';
import Logop from '../../../public/icons/LogoPlataforma1.png';
import styles from '../../../styles/Header.module.scss';
import position from '../../../styles/Profile.module.scss';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../../security/loginbutton/login';
import { LogoutButton} from '../../security/logoutbutton/logout';
import { Profile } from '../../security/profile/profile';

const Header = () => {

  const{ isAuthenticated } = useAuth0();

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
          {/* { isAuthenticated?( 
            < >
            
            <Profile />
            <LogoutButton />
            
            </>
            ):(
              
              
            )} */}
        </div>
        <nav className={styles.navBar}>
            <LoginButton />
        </nav>
    </header>
    </div>
  )
}

export default Header;
